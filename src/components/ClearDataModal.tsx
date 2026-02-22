import { forwardRef } from 'react';

interface ClearDataModalProps {
  planTitle: string;
  onConfirm: () => void;
}

export const ClearDataModal = forwardRef<HTMLDialogElement, ClearDataModalProps>(
  ({ planTitle, onConfirm }, ref) => {
    return (
      <dialog ref={ref} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-error mb-2">Atenção!</h3>
          <p className="py-2">
            Tem certeza que deseja apagar todo o seu progresso, checklists e anotações para a
            certificação <strong>{planTitle}</strong>?
          </p>
          <p className="py-2 text-sm opacity-70">
            Esta ação não pode ser desfeita. Os dados armazenados no cache local deste navegador
            serão removidos definitivamente.
          </p>
          <div className="modal-action">
            <form method="dialog">
              <button
                className="btn mr-2"
                type="button"
                onClick={() => (ref as React.RefObject<HTMLDialogElement>)?.current?.close()}
              >
                Cancelar
              </button>
              <button
                className="btn btn-error"
                type="button"
                onClick={() => {
                  onConfirm();
                  (ref as React.RefObject<HTMLDialogElement>)?.current?.close();
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
    );
  },
);
