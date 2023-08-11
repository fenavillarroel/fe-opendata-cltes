import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importa useNavigate

export default function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Obtén la función de navegación

  const handleLogin = async (e) => {
    e.preventDefault();
    let bodyFormData = new URLSearchParams();
    bodyFormData.append('username', username);
    bodyFormData.append('password', password);

    try {
      const response = await fetch('http://127.0.0.1:8000/api/v1/login', {
        method: 'POST',
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: bodyFormData.toString(),
      });
      
      if (response.ok) {
        const data = await response.json();
        const token = data.access_token;
        
        // Almacenar el token en el estado global o en un contexto
        // Aquí estoy usando el estado local del componente como ejemplo
        onLogin(token);

        // Redirigir a otra página después del inicio de sesión exitoso
        navigate('/dashboard'); // Cambia '/dashboard' a la ruta deseada
      } else {
        console.error('Inicio de sesión fallido');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  };

  // Resto del código del componente...


  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleLogin}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="text"
              value={username}
              className="form-control mt-1"
              placeholder="Enter username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              value={password}
              className="form-control mt-1"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          {/* <p className="forgot-password text-right mt-2">
            Forgot <a href="#">password?</a>
          </p> */}
        </div>
      </form>
    </div>
  )
}