import React, { useEffect, useState } from 'react';
import '../styles/LcdDisplay.scss';

const LcdDisplay = () => {
  const [displayData, setDisplayData] = useState([]);

  useEffect(() => {
    fetch('/lcd')
      .then(response => response.json())
      .then(data => setDisplayData(data));
  }, []);

  return (
    <section id="lcd-display" className="lcd-display">
      <h2>Pantalla LCD</h2>
      <ul>
        {displayData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
};

export default LcdDisplay;
