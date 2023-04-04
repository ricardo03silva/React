import React from 'react';

import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

const ExpensesList = (props) => {
    if (props.items.length === 0) {
        return <h2 className="expenses-list__fallback">No Expenses Found</h2>;
    }

    return (
        <ul className="expenses-list">
            {props.items.map((el) => {
                return <ExpenseItem key={el.id} title={el.title} amount={el.amount} date={el.date} />;
            })}
        </ul>
    );
};

export default ExpensesList;
