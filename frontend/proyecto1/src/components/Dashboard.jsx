import React, { useState, useEffect } from 'react';
import '../styles/Dashboard.scss';

const Dashboard = () => {
  const areas = [
    { name: 'Recepción', status: 'OK' },
    { name: 'Área de Conferencias', status: 'OK' },
    { name: 'Área de Trabajo', status: 'OK' },
    { name: 'Área Administrativa', status: 'OK' },
    { name: 'Área de Carga y Descarga', status: 'OK' },
    { name: 'Cafetería', status: 'OK' },
    { name: 'Baño', status: 'OK' },
    { name: 'Exterior', status: 'OK' },
  ];
  const [data, setData] = useState({
    lighting: {},
    customers: 0,
    conveyor: '',
    gate: '',
    alarm: '',
    lcd_display: [],
  });

  useEffect(() => {
    fetch('/dashboard')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching dashboard data:', error));
  }, []);

  return (
    <section id="dashboard" className="dashboard">
      <h2>Dashboard</h2>
      <p>Resumen de la sucursal</p>
      <div className="section">
        <h3>Iluminación</h3>
       {/** <div className="area-status">
          {Object.keys(data.lighting).map(area => (
            <div key={area} className="area-card">
              <h4>{area.charAt(0).toUpperCase() + area.slice(1)}</h4>
              <p>Iluminación: {data.lighting[area] === 'on' ? 'Encendido' : 'Apagado'}</p>
            </div> 
            esto aplicara cuando ya se puedan realizar peticiones al back el de abajo es de prueba*/}
              <div className="area-status">
        {areas.map((area, index) => (
          <div key={index} className="area-card">
            <h3>{area.name}</h3>
            <p>Status: {area.status}</p>
          </div>
          ))}
        </div>
      </div>
      <div className="section">
        <h3>Estado General</h3>
        <div className="general-status">
          <div className="status-card">
            <h4>Clientes</h4>
            <p>Número de clientes: {data.customers}</p>
          </div>
          <div className="status-card">
            <h4>Banda Transportadora</h4>
            <p>Estado: {data.conveyor === 'moving' ? 'En movimiento' : 'Detenida'}</p>
          </div>
          <div className="status-card">
            <h4>Portón</h4>
            <p>Estado: {data.gate === 'closed' ? 'Cerrado' : 'Abierto'}</p>
          </div>
          <div className="status-card">
            <h4>Alarma</h4>
            <p>Estado: {data.alarm === 'off' ? 'Desactivada' : 'Activada'}</p>
          </div>
          <div className="status-card">
            <h4>Pantalla LCD</h4>
            <ul>
              {data.lcd_display.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;


