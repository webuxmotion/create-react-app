import React, { Component, useContext } from 'react';
import { AppContext } from './context/AppContext';
import { Amount } from './components/Amount';
import { Controls } from './components/Controls';

function App() {
  const { amount } = useContext(AppContext);

  return (
    <div className="app-container">
      <Amount value={amount} />
      <div className="separator" />
      <Controls />
    </div>
  )
}

export default App;
