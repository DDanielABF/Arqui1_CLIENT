import React, { useState, useEffect } from 'react';
import '../styles/LightingControl.scss';

const LightingControl = () => {
  const [lights, setLights] = useState({
    reception: 'off',
    conference: 'off',
    workArea: 'off',
    admin: 'off',
    loading: 'off',
    cafeteria: 'off',
    bathroom: 'off',
    exterior: 'off',
  });

  const toggleLight = (area) => {
    const newState = lights[area] === 'off' ? 'on' : 'off';
    fetch(`/lights/${area}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ state: newState }),
    })
      .then(response => response.json())
      .then(data => setLights({ ...lights, [area]: data.state }));
  };

  useEffect(() => {
    // Fetch initial states from the backend
    fetch('/lights')
      .then(response => response.json())
      .then(data => setLights(data));
  }, []);

  return (
    <section id="lighting-control" className="lighting-control">
      <h2>Control de Iluminación</h2>
      <ul>
        {Object.keys(lights).map(area => (
          <li key={area}>
            {area.charAt(0).toUpperCase() + area.slice(1)}:
            <button onClick={() => toggleLight(area)}>
              {lights[area] === 'off' ? 'Turn On' : 'Turn Off'}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default LightingControl;
