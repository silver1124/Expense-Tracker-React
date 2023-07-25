import React from 'react';

import NewExpense from './components/Expenses/Form/NewExpense'
import Expenses from './components/Expenses/Expenses';

function App() {
  const expense = [{
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
      location : 'locA',
    },
    { 
      id: 'e2', 
      title: 'New TV', 
      amount: 799.49, 
      date: new Date(2021, 2, 12),
      location : 'locB', 
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
      location : 'locC',
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
      location : 'locD',
    },
  ];

   return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense />
      <Expenses expense={expense} />
    </div>
  );
}

export default App;

