import React, { useEffect, useState } from 'react';
import '../styles/StatusDisplay.scss';

const StatusDisplay = () => {
  const [status, setStatus] = useState({});

  useEffect(() => {
    fetch('/status')
      .then(response => response.json())
      .then(data => setStatus(data));
  }, []);

  return (
    <section id="status-display" className="status-display">
      <h2>Estado de los Dispositivos</h2>
      <ul>
        {Object.keys(status).map(key => (
          <li key={key}>{key}: {status[key]}</li>
        ))}
      </ul>
    </section>
  );
};

export default StatusDisplay;
