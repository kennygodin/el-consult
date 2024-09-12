/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import './button.scss';

function Button({ label, path }) {
  const navigate = useNavigate();

  return <button onClick={() => navigate(path)}>{label}</button>;
}

export default Button;
