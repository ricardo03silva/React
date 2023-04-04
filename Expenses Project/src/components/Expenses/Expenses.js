import React, { useState } from 'react';
import './Expenses.css';

import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
    const [filteredYear, setFilter] = useState('all');

    const filterYearHandler = (year) => {
        setFilter(year);
    };

    const filteredExpenses = filteredYear === 'all' ? props.items : props.items.filter((el) => el.date.getFullYear() === Number(filteredYear));

    return (
        <Card className="expenses">
            <ExpensesFilter selectedYear={filteredYear} onFilterYear={filterYearHandler} />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList items={filteredExpenses} />
        </Card>
    );
};

export default Expenses;
