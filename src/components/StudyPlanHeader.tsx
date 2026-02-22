import { Menu, Home, CalendarDays, Timer, BarChart3, HardDrive, Trash2 } from 'lucide-react';
import { PlanConfig } from '../data/studyPlan';

interface StudyPlanHeaderProps {
  planConfig: PlanConfig;
  onBack: () => void;
  openExamDateForm: () => void;
  isDarkMode: boolean;
  toggleTheme: () => void;
  openClearDataModal: () => void;
}

export function StudyPlanHeader({
  planConfig,
  onBack,
  openExamDateForm,
  isDarkMode,
  toggleTheme,
  openClearDataModal,
}: StudyPlanHeaderProps) {
  return (
    <div className="navbar bg-base-200 shadow-sm rounded-box mb-6 relative z-50">
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
              <a onClick={onBack}>
                <Home className="h-4 w-4" /> Tela inicial
              </a>
            </li>
            <li>
              <a onClick={openExamDateForm}>
                <CalendarDays className="h-4 w-4" /> Editar data de exame
              </a>
            </li>
            <li>
              <a
                onClick={() =>
                  (document.getElementById('study_timer_modal') as HTMLDialogElement)?.showModal()
                }
              >
                <Timer className="h-4 w-4" /> Cronômetro de estudo
              </a>
            </li>
            <li>
              <a
                onClick={() =>
                  (document.getElementById('notes_stats_modal') as HTMLDialogElement)?.showModal()
                }
              >
                <BarChart3 className="h-4 w-4" /> Estatísticas
              </a>
            </li>
            <li>
              <a
                onClick={() =>
                  (document.getElementById('cache_info_modal') as HTMLDialogElement)?.showModal()
                }
              >
                <HardDrive className="h-4 w-4" /> Uso de cache
              </a>
            </li>
            <li>
              <a className="text-error" onClick={openClearDataModal}>
                <Trash2 className="h-4 w-4" /> Limpar dados
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex-1 justify-center">
        <h1 className="text-xl font-bold m-0 p-0 text-center text-base-content">
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
  );
}
