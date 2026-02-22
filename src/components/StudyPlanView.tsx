import { useRef, useEffect, useState, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';
import { PlanConfig } from '../data/studyPlan';
import { ExamDateForm, ExamDateFormHandle } from './ExamDateForm';
import { Accordion } from './Accordion';
import { Footer } from './Footer';
import { CacheInfoModal } from './CacheInfoModal';
import { StudyTimer } from './StudyTimer';
import { NotesStatsModal } from './NotesStatsModal';
import { StudyPlanProvider, useStudyPlan } from '../contexts/StudyPlanContext';
import { useTheme } from '../hooks/useTheme';
import { useLocalStorageBoolean } from '../hooks/useLocalStorage';
import { StudyPlanHeader } from './StudyPlanHeader';
import { ClearDataModal } from './ClearDataModal';

interface StudyPlanViewProps {
  planConfig: PlanConfig;
  onBack: () => void;
}

const containerVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
  exit: { opacity: 0, x: 50, transition: { duration: 0.3 } },
};

export function StudyPlanView(props: StudyPlanViewProps) {
  return (
    <StudyPlanProvider planConfig={props.planConfig}>
      <StudyPlanContent {...props} />
    </StudyPlanProvider>
  );
}

function StudyPlanContent({ planConfig, onBack }: StudyPlanViewProps) {
  const { totalProgress, completedDomainsCount, totalDomainsCount } = useStudyPlan();
  const [isDarkMode, toggleTheme] = useTheme();
  const [hideExamDate, setHideExamDate] = useLocalStorageBoolean(
    `hideExamDate-${planConfig.id}`,
    false,
  );
  const examDateFormRef = useRef<ExamDateFormHandle>(null);
  const clearDataModalRef = useRef<HTMLDialogElement>(null);
  const { width, height } = useWindowSize();
  const [showConfetti, setShowConfetti] = useState(false);
  const [visibleMessage, setVisibleMessage] = useState<string | null>(null);
  const [openDomainId, setOpenDomainId] = useState<string | null>(null);

  const handleAccordionToggle = useCallback((domainId: string, open: boolean) => {
    if (open) {
      setOpenDomainId(domainId);
    } else {
      setOpenDomainId((prev) => (prev === domainId ? null : prev));
    }
  }, []);

  useEffect(() => {
    if (totalProgress === 100) {
      setShowConfetti(true);
      const timer = setTimeout(() => setShowConfetti(false), 8000); // Stop after 8 seconds
      return () => clearTimeout(timer);
    } else {
      setShowConfetti(false);
    }
  }, [totalProgress]);

  const activeMilestoneMessage = useMemo(() => {
    const messages = [
      {
        condition: () => completedDomainsCount === totalDomainsCount,
        message: 'Parabéns, você já está preparadíssimo(a) para o exame!',
      },
      {
        condition: () => totalDomainsCount > 1 && completedDomainsCount === totalDomainsCount - 1,
        message: 'Falta apenas revisão e prática, quase lá!',
      },
      {
        condition: () => completedDomainsCount === Math.ceil(totalDomainsCount / 2),
        message: 'Metade dos domínios concluída!',
      },
      {
        condition: () =>
          completedDomainsCount >= 1 && completedDomainsCount < Math.ceil(totalDomainsCount / 2),
        message: 'Ótimo, você está indo bem!',
      },
    ];
    return messages.find((m) => m.condition())?.message || null;
  }, [completedDomainsCount, totalDomainsCount]);

  useEffect(() => {
    if (activeMilestoneMessage) {
      setVisibleMessage(activeMilestoneMessage);
      const timer = setTimeout(() => {
        setVisibleMessage(null);
      }, 5000);
      return () => clearTimeout(timer);
    } else {
      setVisibleMessage(null);
    }
  }, [activeMilestoneMessage]);

  const handleClearData = () => {
    try {
      const keysToRemove: string[] = [];
      keysToRemove.push(`examDate-${planConfig.id}`);
      keysToRemove.push(`hideExamDate-${planConfig.id}`);

      planConfig.data.domains.forEach((domain) => {
        keysToRemove.push(`accordion_${planConfig.id}_${domain.id}`);
        domain.days.forEach((day) => {
          keysToRemove.push(`${day.id}-postits`);
          day.checklist.forEach((item) => {
            keysToRemove.push(item.id);
          });
        });
      });

      keysToRemove.forEach((key) => localStorage.removeItem(key));
      window.location.reload();
    } catch (e) {
      console.error('Erro ao limpar dados', e);
    }
  };

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" exit="exit">
      {showConfetti && (
        <div className="fixed inset-0 w-screen h-screen z-[9999] pointer-events-none">
          <Confetti
            width={width}
            height={height}
            recycle={false}
            numberOfPieces={500}
            gravity={0.15}
          />
        </div>
      )}

      <StudyPlanHeader
        planConfig={planConfig}
        onBack={onBack}
        openExamDateForm={() => examDateFormRef.current?.openModal()}
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
        openClearDataModal={() => clearDataModalRef.current?.showModal()}
      />

      <ClearDataModal
        ref={clearDataModalRef}
        planTitle={planConfig.title}
        onConfirm={handleClearData}
      />

      <div className="mb-6 px-2">
        <p className="text-sm">
          Plano de estudo preparado para{' '}
          <strong className="text-primary">{planConfig.title}</strong>. Acompanhe seu progresso
          abaixo.
        </p>
        <p className="text-xs opacity-70 mt-1">
          As checklists e anotações são salvas em cache localmente. Se você acessar de outro
          dispositivo ou limpar o cache, não será possível retomar o andamento do plano de estudo.
        </p>
      </div>

      {visibleMessage && (
        <div className="toast toast-top toast-center mt-16 z-[100]">
          <div className="alert alert-success shadow-lg">
            <span>{visibleMessage}</span>
          </div>
        </div>
      )}

      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-6 px-2 bg-base-200 p-4 rounded-xl">
        <div className="w-full md:w-auto flex-1 h-12 flex items-center justify-start">
          <ExamDateForm
            ref={examDateFormRef}
            planId={planConfig.id}
            hideExamDate={hideExamDate}
            setHideExamDate={setHideExamDate}
          />
        </div>

        <div className="w-full md:w-auto flex flex-col items-center md:items-end flex-1">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-sm opacity-80 font-medium">Progresso Geral</span>
            <span className="text-2xl font-bold text-primary">{totalProgress}%</span>
          </div>
          <progress
            className="progress progress-primary w-full md:w-56"
            value={totalProgress}
            max="100"
          ></progress>
        </div>
      </div>
      {planConfig.data.domains.map((domain) => (
        <Accordion
          key={domain.id}
          domain={domain}
          planId={planConfig.id}
          isOpen={openDomainId === domain.id}
          onToggle={handleAccordionToggle}
        />
      ))}
      {planConfig.footerConfig && (
        <p className="text-center text-xs text-base-content/60 mt-8 mb-2">
          Baseado no{' '}
          <a
            href={planConfig.footerConfig.examLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-base-content/50 underline hover:text-base-content/70 transition-colors"
          >
            {planConfig.footerConfig.examName}
          </a>{' '}
          · Acesso em {planConfig.footerConfig.lastAccessDate}. Este guia pode estar desatualizado —
          consulte o site oficial da AWS.
        </p>
      )}
      <Footer />

      {/* Modals */}
      <CacheInfoModal planConfig={planConfig} />
      <StudyTimer />
      <NotesStatsModal planConfig={planConfig} />
    </motion.div>
  );
}
