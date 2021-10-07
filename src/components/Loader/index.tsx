import ReactDOM from 'react-dom';

import { Overlay } from './styles';

interface ILoader {
  isLoading: boolean;
}

export default function Loader({ isLoading }: ILoader) {
  if (isLoading) {
    return null;
  }

  return ReactDOM.createPortal(
    <Overlay>
      <div className="loader" />
    </Overlay>,
    document.getElementById('loader-root')!,
  );
}
