import React from 'react';
import Dashboard from './components/Dashboard';
import TradeScenario from './components/TradeScenario';
import BlockchainTransaction from './components/BlockchainTransaction';
import SustainabilityScorecard from './components/SustainabilityScorecard';
import RealTimeData from './components/RealTimeData';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Green Energy Asset Trading Platform</h1>
      <Dashboard />
      <TradeScenario />
      <BlockchainTransaction />
      <SustainabilityScorecard />
      <RealTimeData />
    </div>
  );
}

export default App;
