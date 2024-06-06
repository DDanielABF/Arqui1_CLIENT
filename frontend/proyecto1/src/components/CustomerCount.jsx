import React, { useState, useEffect } from 'react';
import '../styles/CustomerCount.scss';

const CustomerCount = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch('/customers')
      .then(response => response.json())
      .then(data => setCount(data.count));
  }, []);

  return (
    <section id="customer-count" className="customer-count">
      <h2>Conteo de Clientes</h2>
      <p>Número de clientes dentro de la sucursal: {count}</p>
    </section>
  );
};

export default CustomerCount;
