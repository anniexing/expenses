import { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [newExpenseTitle, setNewExpenseTitle] = useState('');
  const [newExpenseAmount, setNewExpenseAmount] = useState('');
  const [newExpenseDate, setNewExpenseDate] = useState('');

  const titleChangeHandler = (event) => {
    setNewExpenseTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setNewExpenseAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setNewExpenseDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: newExpenseTitle,
      amount: newExpenseAmount,
      date: new Date(newExpenseDate),
    };

    props.onSaveExpenseData(expenseData);
    setNewExpenseTitle('');
    setNewExpenseAmount('');
    setNewExpenseDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            value={newExpenseTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={newExpenseAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2022-12-31'
            value={newExpenseDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;