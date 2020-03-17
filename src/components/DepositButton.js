import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

function DepositButton() {
  const { deposit } = useContext(AppContext);

  return <button
    className="button"
    type="button"
    onClick={() => deposit(10)}
  >
    Deposit
  </button>;
}

export { DepositButton };
