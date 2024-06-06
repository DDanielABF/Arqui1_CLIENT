

import './App.css'
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import ControlPanel from './components/ControlPanel';
import StatusDisplay from './components/StatusDisplay';
import LightingControl from './components/LightingControl';
import CustomerCount from './components/CustomerCount';
import ConveyorControl from './components/ConveyorControl';
import GateControl from './components/GateControl';
import AlarmControl from './components/AlarmControl';
import LcdDisplay from './components/LcdDisplay';


function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Dashboard />
        <LightingControl />
        <CustomerCount />
        <ConveyorControl />
        <GateControl />
        <AlarmControl />
        <StatusDisplay />
        <LcdDisplay />
      </main>
      <Footer />
    </div>
  );
}

export default App;
