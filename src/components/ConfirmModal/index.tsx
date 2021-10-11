import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import { Overlay } from './styles';

interface IConfirmModal {
  onConfirm(): void;
  onCancel(): void;
  isVisible: boolean;
  name: string;
}

export default function ConfirmModal({
  name, isVisible, onCancel, onConfirm,
}: IConfirmModal) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !isVisible) {
    return null;
  }

  return ReactDOM.createPortal(
    <Overlay>
      <div className="modal">
        <main>
          <h2>
            Tem certeza que deseja remover o contato
            {` "${name}"`}
            ?
          </h2>
          <p>Esta ação não pode ser desfeita! </p>
        </main>
        <div className="actions">
          <div className="cancel-button">
            <button onClick={onCancel}>Cancelar</button>
          </div>
          <div className="delete-button">
            <button onClick={onConfirm}>Deletar</button>
          </div>
        </div>
      </div>
    </Overlay>,
    document.getElementById('confirmModal-root') as HTMLElement,
  );
}
