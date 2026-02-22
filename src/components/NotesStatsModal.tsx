import { useMemo } from 'react';
import { PlanConfig } from '../data/studyPlan';
import { BarChart3, StickyNote, BookOpen, FileText, FileDown } from 'lucide-react';
import jsPDF from 'jspdf';

interface PostItNote {
  id: string;
  text: string;
  createdAt: number;
}

interface DayStats {
  dayId: string;
  dayTitle: string;
  domainTitle: string;
  notes: PostItNote[];
  wordCount: number;
}

interface NotesStatsModalProps {
  planConfig: PlanConfig;
}

function collectAllNotes(planConfig: PlanConfig): DayStats[] {
  const stats: DayStats[] = [];

  planConfig.data.domains.forEach((domain) => {
    domain.days.forEach((day) => {
      const raw = localStorage.getItem(`${day.id}-postits`);
      let notes: PostItNote[] = [];
      if (raw) {
        try {
          notes = JSON.parse(raw);
        } catch {
          // ignore parse errors
        }
      }
      if (notes.length > 0) {
        const wordCount = notes.reduce((acc, note) => {
          return acc + note.text.trim().split(/\s+/).filter(Boolean).length;
        }, 0);
        stats.push({
          dayId: day.id,
          dayTitle: day.title,
          domainTitle: domain.title,
          notes,
          wordCount,
        });
      }
    });
  });

  return stats;
}

function generateTextContent(planConfig: PlanConfig, dayStats: DayStats[]): string {
  let text = `Anotações — ${planConfig.title}\n`;
  text += `Exportado em: ${new Date().toLocaleString('pt-BR')}\n`;
  text += '='.repeat(60) + '\n\n';

  let currentDomain = '';
  dayStats.forEach((ds) => {
    if (ds.domainTitle !== currentDomain) {
      currentDomain = ds.domainTitle;
      text += `\n${currentDomain}\n`;
      text += '-'.repeat(40) + '\n';
    }
    text += `\n${ds.dayTitle}\n`;
    ds.notes.forEach((note, i) => {
      text += `  ${i + 1}. ${note.text}\n`;
    });
  });

  return text;
}

function generateMarkdownContent(planConfig: PlanConfig, dayStats: DayStats[]): string {
  let md = `# Anotações — ${planConfig.title}\n\n`;
  md += `> Exportado em: ${new Date().toLocaleString('pt-BR')}\n\n`;

  let currentDomain = '';
  dayStats.forEach((ds) => {
    if (ds.domainTitle !== currentDomain) {
      currentDomain = ds.domainTitle;
      md += `## ${currentDomain}\n\n`;
    }
    md += `### ${ds.dayTitle}\n\n`;
    ds.notes.forEach((note) => {
      md += `- ${note.text}\n`;
    });
    md += '\n';
  });

  return md;
}

function downloadFile(content: string, filename: string, mimeType: string) {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function generatePDF(planConfig: PlanConfig, dayStats: DayStats[]) {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  let y = 20;

  // Title
  doc.setFontSize(18);
  doc.text(`Anotações — ${planConfig.title}`, pageWidth / 2, y, { align: 'center' });
  y += 10;

  doc.setFontSize(10);
  doc.setTextColor(128);
  doc.text(`Exportado em: ${new Date().toLocaleString('pt-BR')}`, pageWidth / 2, y, {
    align: 'center',
  });
  doc.setTextColor(0);
  y += 15;

  let currentDomain = '';

  dayStats.forEach((ds) => {
    // Check page break
    if (y > 270) {
      doc.addPage();
      y = 20;
    }

    // Domain header
    if (ds.domainTitle !== currentDomain) {
      currentDomain = ds.domainTitle;
      doc.setFontSize(13);
      doc.setFont('helvetica', 'bold');
      doc.text(currentDomain, 14, y);
      y += 8;
    }

    // Day header
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text(ds.dayTitle, 14, y);
    y += 6;

    // Notes
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    ds.notes.forEach((note) => {
      const lines = doc.splitTextToSize(`• ${note.text}`, pageWidth - 30);
      lines.forEach((line: string) => {
        if (y > 280) {
          doc.addPage();
          y = 20;
        }
        doc.text(line, 18, y);
        y += 5;
      });
    });

    y += 4;
  });

  doc.save(`anotacoes-${planConfig.id}.pdf`);
}

export function NotesStatsModal({ planConfig }: NotesStatsModalProps) {
  const dayStats = useMemo(() => collectAllNotes(planConfig), [planConfig]);

  const totalNotes = dayStats.reduce((acc, ds) => acc + ds.notes.length, 0);
  const totalWords = dayStats.reduce((acc, ds) => acc + ds.wordCount, 0);

  const handleExportTxt = () => {
    const content = generateTextContent(planConfig, dayStats);
    downloadFile(content, `anotacoes-${planConfig.id}.txt`, 'text/plain;charset=utf-8');
  };

  const handleExportMd = () => {
    const content = generateMarkdownContent(planConfig, dayStats);
    downloadFile(content, `anotacoes-${planConfig.id}.md`, 'text/markdown;charset=utf-8');
  };

  const handleExportPdf = () => {
    generatePDF(planConfig, dayStats);
  };

  return (
    <dialog id="notes_stats_modal" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
          <BarChart3 className="h-5 w-5" />
          Estatísticas
        </h3>

        {/* Stats */}
        <div className="stats stats-vertical sm:stats-horizontal shadow w-full bg-base-200">
          <div className="stat">
            <div className="stat-figure text-primary">
              <StickyNote className="h-6 w-6" />
            </div>
            <div className="stat-title">Anotações</div>
            <div className="stat-value text-primary text-2xl">{totalNotes}</div>
            <div className="stat-desc">post-its salvos</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <BookOpen className="h-6 w-6" />
            </div>
            <div className="stat-title">Palavras</div>
            <div className="stat-value text-secondary text-2xl">{totalWords.toLocaleString()}</div>
            <div className="stat-desc">total de palavras</div>
          </div>
        </div>

        {/* Breakdown by day */}
        {dayStats.length > 0 && (
          <div className="mt-4">
            <p className="text-sm font-medium mb-2 opacity-70">Detalhamento por dia:</p>
            <div className="max-h-40 overflow-y-auto">
              <table className="table table-xs w-full">
                <thead>
                  <tr>
                    <th>Dia</th>
                    <th className="text-right">Notas</th>
                    <th className="text-right">Palavras</th>
                  </tr>
                </thead>
                <tbody>
                  {dayStats.map((ds) => (
                    <tr key={ds.dayId}>
                      <td className="truncate max-w-[200px]">{ds.dayTitle}</td>
                      <td className="text-right">{ds.notes.length}</td>
                      <td className="text-right">{ds.wordCount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Export buttons */}
        <div className="mt-6">
          <p className="text-sm font-medium mb-2 opacity-70">Exportar anotações:</p>
          <div className="flex flex-wrap gap-2">
            <button
              className="btn btn-sm btn-outline btn-error"
              onClick={handleExportPdf}
              disabled={totalNotes === 0}
            >
              <FileDown className="h-4 w-4" /> PDF
            </button>
            <button
              className="btn btn-sm btn-outline"
              onClick={handleExportTxt}
              disabled={totalNotes === 0}
            >
              <FileText className="h-4 w-4" /> TXT
            </button>
            <button
              className="btn btn-sm btn-outline btn-info"
              onClick={handleExportMd}
              disabled={totalNotes === 0}
            >
              <FileText className="h-4 w-4" /> Markdown
            </button>
          </div>
          {totalNotes === 0 && (
            <p className="text-xs opacity-50 mt-2">Nenhuma anotação para exportar.</p>
          )}
        </div>

        <div className="modal-action">
          <form method="dialog">
            <button className="btn">Fechar</button>
          </form>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>fechar</button>
      </form>
    </dialog>
  );
}
