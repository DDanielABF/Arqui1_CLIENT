import React, { useState, useEffect } from 'react';
import '../styles/ConveyorControl.scss';

const ConveyorControl = () => {
  const [conveyorState, setConveyorState] = useState('stopped');

  const toggleConveyor = () => {
    const newState = conveyorState === 'stopped' ? 'moving' : 'stopped';
    fetch('/conveyor', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ state: newState }),
    })
      .then(response => response.json())
      .then(data => setConveyorState(data.state));
  };

  useEffect(() => {
    fetch('/conveyor')
      .then(response => response.json())
      .then(data => setConveyorState(data.state));
  }, []);

  return (
    <section id="conveyor-control" className="conveyor-control">
      <h2>Control de Banda Transportadora</h2>
      <p>Estado: {conveyorState}</p>
      <button onClick={toggleConveyor}>
        {conveyorState === 'stopped' ? 'Iniciar' : 'Detener'}
      </button>
    </section>
  );
};

export default ConveyorControl;
