import React from 'react';

import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const Expenses = (props) => {
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
        <Card className="expenses">{expenses}</Card>
    );

}

export default Expenses;