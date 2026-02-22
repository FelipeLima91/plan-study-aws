import { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import { useLocalStorageString } from '../hooks/useLocalStorage';
import { useCountdown } from '../hooks/useCountdown';
import { Save, CalendarDays, Edit2, CalendarPlus } from 'lucide-react';

interface ExamDateFormProps {
  planId: string;
  hideExamDate: boolean;
  setHideExamDate: (value: boolean) => void;
}

export interface ExamDateFormHandle {
  openModal: () => void;
}

export const ExamDateForm = forwardRef<ExamDateFormHandle, ExamDateFormProps>(
  ({ planId, hideExamDate, setHideExamDate }, ref) => {
    const [examDate, setExamDate] = useLocalStorageString(`examDate-${planId}`, '');
    const [inputValue, setInputValue] = useState(examDate);
    const countdownText = useCountdown(examDate);

    const modalRef = useRef<HTMLDialogElement>(null);

    // Sincronizar inputValue com examDate quando carregado do localStorage
    useEffect(() => {
      setInputValue(examDate);
    }, [examDate]);

    const formatDate = (dateString: string): string => {
      if (!dateString) return '';
      const date = new Date(dateString);
      // Add timezone adjustment to avoid off-by-one errors in local display
      date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
      return date.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      });
    };

    const handleSave = () => {
      setExamDate(inputValue);
      modalRef.current?.close();
    };

    const openModal = () => {
      setInputValue(examDate);
      modalRef.current?.showModal();
    };

    useImperativeHandle(ref, () => ({
      openModal,
    }));

    const closeModal = () => {
      setInputValue(examDate);
      modalRef.current?.close();
    };

    return (
      <div className="flex flex-col md:flex-row items-center justify-start gap-4">
        {/* Display based on whether examDate exists - Only when not hidden */}
        {!hideExamDate &&
          (!examDate ? (
            <button className="btn btn-primary" onClick={openModal}>
              <CalendarPlus className="w-5 h-5" />
              Incluir data da prova
            </button>
          ) : (
            <div className="flex items-center gap-4">
              <div className="flex flex-col">
                <span className="text-xs uppercase font-bold opacity-60 tracking-wider">
                  Data da Prova
                </span>
                <div className="flex items-center gap-2">
                  <CalendarDays className="w-5 h-5 text-primary" />
                  <span className="font-medium">{formatDate(examDate)}</span>
                </div>
              </div>
              <div className="divider divider-horizontal m-0"></div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-primary">{countdownText}</span>
              </div>
              <button
                className="btn btn-circle btn-ghost btn-sm ml-2 hidden md:inline-flex"
                onClick={openModal}
                title="Editar data"
              >
                <Edit2 className="w-4 h-4" />
              </button>
            </div>
          ))}

        {/* DaisyUI Modal for Editing */}
        <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="font-bold text-lg mb-4">
              {examDate ? 'Editar data da prova' : 'Definir data da prova'}
            </h3>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Selecione o dia do exame</span>
              </label>
              <input
                type="date"
                className="input input-bordered input-primary w-full"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
            </div>

            <div className="modal-action flex justify-between w-full items-center">
              <div>
                <label className="label cursor-pointer justify-start gap-2 p-0">
                  <input
                    type="checkbox"
                    className="toggle toggle-sm toggle-primary"
                    checked={!hideExamDate}
                    onChange={(e) => setHideExamDate(!e.target.checked)}
                  />
                  <span className="label-text text-xs opacity-70">Mostrar no painel</span>
                </label>
              </div>
              <div className="flex gap-2">
                <button className="btn btn-ghost" onClick={closeModal}>
                  Cancelar
                </button>
                <button className="btn btn-primary" onClick={handleSave}>
                  <Save size={16} className="mr-1" />
                  Salvar
                </button>
              </div>
            </div>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button onClick={closeModal}>fechar</button>
          </form>
        </dialog>
      </div>
    );
  },
);

ExamDateForm.displayName = 'ExamDateForm';
