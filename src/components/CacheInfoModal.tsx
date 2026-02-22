import { useMemo } from 'react';
import { PlanConfig } from '../data/studyPlan';
import { HardDrive, Package, CheckSquare, StickyNote } from 'lucide-react';

interface CacheInfoModalProps {
  planConfig: PlanConfig;
}

interface CacheBreakdown {
  totalItems: number;
  totalBytes: number;
  checkboxCount: number;
  postitCount: number;
  configCount: number;
}

function calculateCacheUsage(planConfig: PlanConfig): CacheBreakdown {
  const relevantKeys: string[] = [];

  // Plan-level config keys
  relevantKeys.push(`examDate-${planConfig.id}`);
  relevantKeys.push(`hideExamDate-${planConfig.id}`);
  relevantKeys.push(`selectedPlanId`);

  const checkboxKeys: string[] = [];
  const postitKeys: string[] = [];

  planConfig.data.domains.forEach((domain) => {
    relevantKeys.push(`accordion_${planConfig.id}_${domain.id}`);
    domain.days.forEach((day) => {
      const postitKey = `${day.id}-postits`;
      postitKeys.push(postitKey);
      relevantKeys.push(postitKey);
      day.checklist.forEach((item) => {
        checkboxKeys.push(item.id);
        relevantKeys.push(item.id);
      });
    });
  });

  let totalBytes = 0;
  let totalItems = 0;
  let checkboxCount = 0;
  let postitCount = 0;
  let configCount = 0;

  relevantKeys.forEach((key) => {
    const value = localStorage.getItem(key);
    if (value !== null) {
      totalItems++;
      // Size = key length + value length (UTF-16 = 2 bytes per char)
      totalBytes += (key.length + value.length) * 2;

      if (checkboxKeys.includes(key)) {
        checkboxCount++;
      } else if (postitKeys.includes(key)) {
        postitCount++;
      } else {
        configCount++;
      }
    }
  });

  return { totalItems, totalBytes, checkboxCount, postitCount, configCount };
}

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  return `${(bytes / 1024).toFixed(1)} KB`;
}

export function CacheInfoModal({ planConfig }: CacheInfoModalProps) {
  const usage = useMemo(() => calculateCacheUsage(planConfig), [planConfig]);

  return (
    <dialog id="cache_info_modal" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
          <HardDrive className="h-5 w-5" />
          Uso de Cache Local
        </h3>

        <div className="stats stats-vertical sm:stats-horizontal shadow w-full bg-base-200">
          <div className="stat">
            <div className="stat-figure text-primary">
              <Package className="h-6 w-6" />
            </div>
            <div className="stat-title">Total de itens</div>
            <div className="stat-value text-primary text-2xl">{usage.totalItems}</div>
            <div className="stat-desc">chaves no localStorage</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <HardDrive className="h-6 w-6" />
            </div>
            <div className="stat-title">Tamanho total</div>
            <div className="stat-value text-secondary text-2xl">
              {formatBytes(usage.totalBytes)}
            </div>
            <div className="stat-desc">armazenamento utilizado</div>
          </div>
        </div>

        <div className="stats stats-vertical sm:stats-horizontal shadow w-full bg-base-200 mt-4">
          <div className="stat">
            <div className="stat-figure text-success">
              <CheckSquare className="h-6 w-6" />
            </div>
            <div className="stat-title">Checkboxes</div>
            <div className="stat-value text-success text-2xl">{usage.checkboxCount}</div>
            <div className="stat-desc">itens marcados</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-warning">
              <StickyNote className="h-6 w-6" />
            </div>
            <div className="stat-title">Anotações</div>
            <div className="stat-value text-warning text-2xl">{usage.postitCount}</div>
            <div className="stat-desc">dias com post-its</div>
          </div>
        </div>

        <p className="text-xs opacity-60 mt-4">
          Os dados são armazenados apenas no cache local deste navegador.
        </p>

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
