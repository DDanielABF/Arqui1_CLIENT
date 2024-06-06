import React from 'react';
import '../styles/Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>Control de Sucursal</h1>
      </div>
      <nav>
        <ul>
          <li><a href="#dashboard">Dashboard</a></li>
          <li><a href="#lighting-control">Control de Iluminación</a></li>
          <li><a href="#customer-count">Conteo de Clientes</a></li>
          <li><a href="#conveyor-control">Control de Banda</a></li>
          <li><a href="#gate-control">Control de Portón</a></li>
          <li><a href="#alarm-control">Control de Alarma</a></li>
          <li><a href="#lcd-display">Pantalla LCD</a></li>
          <li><a href="#status-display">Estado</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
