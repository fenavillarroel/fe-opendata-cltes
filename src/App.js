import React , { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Logout from './pages/Logout';
import Dashboard from './pages/Dashboard';
import Cdr from "./pages/Cdr";
import Payments from "./pages/Payments";
import Navigation from "./components/Navigation";

function App() {
  const [token, setToken] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (newToken) => {
    setToken(newToken);
    setIsLoggedIn(true);
    localStorage.setItem('token', newToken);
  };

  const handleLogout = () => {
    setToken('');
    setIsLoggedIn(false);
    localStorage.removeItem('token');
  };

  return (
    <BrowserRouter>
      <Navigation isLoggedIn={isLoggedIn}/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cdr" element={<Cdr token={token}/>} />
        <Route path="/invoices" element={<Payments />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/logout" element={<Logout onLogout={handleLogout} />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

