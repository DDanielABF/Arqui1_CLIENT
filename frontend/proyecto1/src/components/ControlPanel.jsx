import React, { useState } from 'react';
import '../styles/ControlPanel.scss';

const ControlPanel = () => {
  const [ledState, setLedState] = useState('off');

  const toggleLed = () => {
    const newState = ledState === 'off' ? 'on' : 'off';
    fetch('/led', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ state: newState }),
    })
      .then(response => response.json())
      .then(data => setLedState(data.state));
  };

  return (
    <section id="control-panel" className="control-panel">
      <h2>Panel de Control</h2>
      <button onClick={toggleLed}>
        Turn LED {ledState === 'off' ? 'On' : 'Off'}
      </button>
      {/* Agrega más controles aquí según los requerimientos */}
    </section>
  );
};

export default ControlPanel;
