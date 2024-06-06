import React, { useState, useEffect } from 'react';
import '../styles/AlarmControl.scss';

const AlarmControl = () => {
  const [alarmState, setAlarmState] = useState('off');

  const toggleAlarm = () => {
    const newState = alarmState === 'off' ? 'on' : 'off';
    fetch('/alarm', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ state: newState }),
    })
      .then(response => response.json())
      .then(data => setAlarmState(data.state));
  };

  useEffect(() => {
    fetch('/alarm')
      .then(response => response.json())
      .then(data => setAlarmState(data.state));
  }, []);

  return (
    <section id="alarm-control" className="alarm-control">
      <h2>Control de Alarma Perimetral</h2>
      <p>Estado: {alarmState}</p>
      <button onClick={toggleAlarm}>
        {alarmState === 'off' ? 'Activar' : 'Desactivar'}
      </button>
    </section>
  );
};

export default AlarmControl;
