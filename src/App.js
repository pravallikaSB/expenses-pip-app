import Expenses from './components/Expenses/Expenses';
import React, {useState} from 'react';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES=[
  {
    id:'e1',title: 'DairyMilk Silk',amount: 94.12,date: new Date(2020,7,14)
  },
  {
    id:'e2',title: 'New TV',amount: 799.49,date: new Date(2021,2,12)
  },
  {
    id:'e3',title: 'Car Insurance',amount: 294.67,date: new Date(2021,2,28)
  },
  {
    id:'e4',title: 'Prime Subscription',amount: 106.78,date: new Date(2022,2,23)
  }
];

/* this is a component */
const App = ()=>{
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  

  /* using React object */

  /*
  return React.createElement('div',{},
  React.createElement('h2',{},
  "Let's get started Pravallika!"),
  React.createElement(Expenses,{items:expenses})
  );

  */


  const addExpenseHandler=(expense)=>{
    console.log(expense);
    setExpenses((prevExpenses)=>{
      return [expense,...prevExpenses];
    })
  };


  return (
    <div>
      <NewExpense
      onAddExpense={addExpenseHandler}
      ></NewExpense>
      <Expenses
      items={expenses}
      ></Expenses>
    </div>
  ); 
}

export default App;
