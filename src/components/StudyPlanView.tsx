import { useRef, useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';
import { PlanConfig } from '../data/studyPlan';
import { ExamDateForm, ExamDateFormHandle } from './ExamDateForm';
import { Accordion } from './Accordion';
import { Footer } from './Footer';
import { StudyPlanProvider, useStudyPlan } from '../contexts/StudyPlanContext';
import { useTheme } from '../hooks/useTheme';
import { useLocalStorageBoolean } from '../hooks/useLocalStorage';
import { Menu } from 'lucide-react';

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
  const { width, height } = useWindowSize();
  const [showConfetti, setShowConfetti] = useState(false);
  const [visibleMessage, setVisibleMessage] = useState<string | null>(null);

  useEffect(() => {
    if (totalProgress === 100) {
      setShowConfetti(true);
      const timer = setTimeout(() => setShowConfetti(false), 8000); // Stop after 8 seconds
      return () => clearTimeout(timer);
    } else {
      setShowConfetti(false);
    }
  }, [totalProgress]);

  // Messages configuration array requested by user
  const activeMilestoneMessage = useMemo(() => {
    const messages = [
      {
        condition: () => completedDomainsCount === totalDomainsCount,
        message: 'Parabéns, você já está preparadíssimo(a) para o exame!',
      },
      {
        condition: () => totalDomainsCount > 1 && completedDomainsCount === totalDomainsCount - 1,
        message: 'Falta apenas um domínio, quase lá!',
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
    // Find the first message whose condition is true
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

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" exit="exit">
      {showConfetti && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 9999,
            pointerEvents: 'none',
          }}
        >
          <Confetti
            width={width}
            height={height}
            recycle={false}
            numberOfPieces={500}
            gravity={0.15}
          />
        </div>
      )}

      {/* DaisyUI Navbar */}
      <div className="navbar bg-base-100 shadow-sm rounded-box mb-6 relative z-50">
        <div className="flex-none">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-square btn-ghost" aria-label="Menu">
              <Menu className="h-5 w-5" />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 mt-4"
            >
              <li>
                <a onClick={onBack}>Tela inicial</a>
              </li>
              <li>
                <a onClick={() => examDateFormRef.current?.openModal()}>Editar data de exame</a>
              </li>
              <li>
                <a
                  className="text-error"
                  onClick={() =>
                    (document.getElementById('clear_data_modal') as HTMLDialogElement)?.showModal()
                  }
                >
                  Limpar dados
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-1 justify-center">
          <h1 className="text-xl font-bold m-0 p-0 text-center" style={{ color: 'inherit' }}>
            {planConfig.title}
          </h1>
        </div>
        <label className="swap swap-rotate btn btn-square btn-ghost">
          {/* this hidden checkbox controls the state */}
          <input
            type="checkbox"
            className="theme-controller"
            checked={isDarkMode}
            onChange={toggleTheme}
          />

          {/* sun icon */}
          <svg
            className="swap-off h-6 w-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* moon icon */}
          <svg
            className="swap-on h-6 w-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
      </div>

      {/* Clear Data Confirmation Modal */}
      <dialog id="clear_data_modal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-error mb-2">Atenção!</h3>
          <p className="py-2">
            Tem certeza que deseja apagar todo o seu progresso, checklists e anotações para a
            certificação <strong>{planConfig.title}</strong>?
          </p>
          <p className="py-2 text-sm opacity-70">
            Esta ação não pode ser desfeita. Os dados armazenados no cache local deste navegador
            serão removidos definitivamente.
          </p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn mr-2">Cancelar</button>
              <button
                className="btn btn-error"
                onClick={() => {
                  try {
                    const keysToRemove: string[] = [];
                    // Chaves gerais do plano
                    keysToRemove.push(`examDate-${planConfig.id}`);
                    keysToRemove.push(`hideExamDate-${planConfig.id}`);

                    // Iterar sobre a estrutura do plano para pegar todas as chaves
                    planConfig.data.domains.forEach((domain) => {
                      keysToRemove.push(`accordion_${planConfig.id}_${domain.id}`);
                      domain.days.forEach((day) => {
                        keysToRemove.push(`${day.id}-postits`);
                        day.checklist.forEach((item) => {
                          keysToRemove.push(item.id);
                        });
                      });
                    });

                    // Limpar as chaves relacionadas ao plano atual
                    keysToRemove.forEach((key) => localStorage.removeItem(key));

                    // Forçar atualização da página para refletir as mudanças
                    window.location.reload();
                  } catch (e) {
                    console.error('Erro ao limpar dados', e);
                  }
                }}
              >
                Sim, Limpar Tudo
              </button>
            </form>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>fechar</button>
        </form>
      </dialog>

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
        <Accordion key={domain.id} domain={domain} planId={planConfig.id} />
      ))}
      {planConfig.footerConfig && (
        <p
          style={{
            textAlign: 'center',
            fontSize: '0.8em',
            color: '#888',
            marginTop: '30px',
            marginBottom: '8px',
          }}
        >
          Baseado no{' '}
          <a
            href={planConfig.footerConfig.examLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#aaa', textDecoration: 'underline' }}
          >
            {planConfig.footerConfig.examName}
          </a>{' '}
          · Acesso em {planConfig.footerConfig.lastAccessDate}. Este guia pode estar desatualizado —
          consulte o site oficial da AWS.
        </p>
      )}
      <Footer />
    </motion.div>
  );
}
