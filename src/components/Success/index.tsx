import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import { Overlay } from './styles';

interface ISuccess {
  message: string;
}

export default function Success({ message }: ISuccess) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return ReactDOM.createPortal(
    <Overlay>
      <div className="success">
        <div className="icon">
          <img src="/images/OkIcon.svg" alt="" />
        </div>
        <div className="message-div">
          <p>
            {message}
          </p>
        </div>
      </div>
    </Overlay>,
    document.getElementById('success-root')!,
  );
}
