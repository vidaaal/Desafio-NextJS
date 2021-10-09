import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import { Overlay } from './styles';

export default function Success() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return ReactDOM.createPortal(
    <Overlay>
      <div className="loader">
        worked
      </div>
    </Overlay>,
    document.getElementById('loader-root')!,
  );
}
