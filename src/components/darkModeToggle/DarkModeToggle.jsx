import { ThemeContext } from '../../contexts/ThemeContext';
import './darkModeToggle.scss';
import { useContext } from 'react';

function DarkModeToggle() {
  const { toggle, mode } = useContext(ThemeContext);
  return (
    <div className="toggle-container" onClick={toggle}>
      <div className="toggle-icon">🌙</div>
      <div className="toggle-icon">🔆</div>
      <div
        className="toggle-ball"
        style={mode === 'light' ? { left: '2px' } : { right: '2px' }}
      />
    </div>
  );
}

export default DarkModeToggle;
