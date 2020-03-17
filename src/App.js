import React, { Component, useState } from 'react';
import { Amount } from './components/Amount';
import { Controls } from './components/Controls';

function App() {
  const [amount, setAmount] = useState(0);

  function deposit(value) {
    setAmount(amount + value);
  }

  function withdraw(value) {
    const newAmount = amount - value;
    setAmount(newAmount < 0 ? 0 : newAmount);
  }

  return (
    <div className="app-container">
      <Amount value={amount} />
      <div className="separator" />
      <Controls onDeposit={deposit} onWithdraw={withdraw} />
    </div>
  )
}

export default App;
