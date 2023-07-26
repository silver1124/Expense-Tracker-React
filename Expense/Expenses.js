import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
    };
    const expenses = []
    for (let i=0; i < props.expense.length; i++){
        expenses.push(
        <ExpenseItem 
        title = {props.expense[i].title}
        amount  = {props.expense[i].amount}
        date = {props.expense[i].date}
        location = {props.expense[i].location}
        />
        );
    }
    return (
        <div>
        <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        {expenses}</Card>
        </div>
    );

}

export default Expenses;