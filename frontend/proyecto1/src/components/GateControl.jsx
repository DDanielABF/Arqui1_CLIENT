import React, { useState, useEffect } from 'react';
import '../styles/GateControl.scss';

const GateControl = () => {
  const [gateState, setGateState] = useState('closed');

  const toggleGate = () => {
    const newState = gateState === 'closed' ? 'open' : 'closed';
    fetch('/gate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ state: newState }),
    })
      .then(response => response.json())
      .then(data => setGateState(data.state));
  };

  useEffect(() => {
    fetch('/gate')
      .then(response => response.json())
      .then(data => setGateState(data.state));
  }, []);

  return (
    <section id="gate-control" className="gate-control">
      <h2>Control del Portón de Carga y Descarga</h2>
      <p>Estado: {gateState}</p>
      <button onClick={toggleGate}>
        {gateState === 'closed' ? 'Abrir' : 'Cerrar'}
      </button>
    </section>
  );
};

export default GateControl;
