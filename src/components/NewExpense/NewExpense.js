import {useState} from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = ({
    onAddExpense,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseDataHandler = (newExpenseData) => {
    const expenseData = {
      ...newExpenseData,
      id: Math.random().toString()
    };
    onAddExpense(expenseData);
    setIsEditing(false);
  };

  const editingHandler = () => {
    setIsEditing(!isEditing);
  }

  return (
    <div className='new-expense'>
      {!isEditing && (
        <button onClick={editingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={editingHandler}
        />
      )}

    </div>
  );
};

export default NewExpense;