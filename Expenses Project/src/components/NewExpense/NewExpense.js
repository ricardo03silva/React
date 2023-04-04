import { useState } from 'react';
import './NewExpense.css';

import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const [btnClicked, setClickStatus] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
        props.onAddExpense(expenseData);
        setClickStatus(false);
    };

    const showFormHandler = (event) => {
        setClickStatus(true);
    };

    const hideFormHandler = () => {
        setClickStatus(false);
    };

    return (
        <div className="new-expense">
            {btnClicked ? (
                <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={hideFormHandler} />
            ) : (
                <button type="button" onClick={showFormHandler}>
                    Add New Expense
                </button>
            )}
        </div>
    );
};

export default NewExpense;
