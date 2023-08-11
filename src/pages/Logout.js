import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = ({ onLogout }) => {
  const navigate = useNavigate(); // Obtener la función de navegación

  useEffect(() => {
    // Realiza tareas de cierre de sesión después de que el componente esté montado
    onLogout();

    // Redirigir a la página principal después del cierre de sesión
    navigate('/');
  }, [onLogout, navigate]);

  // No renderizar ningún contenido en el componente Logout
  return null;
};

export default Logout;

