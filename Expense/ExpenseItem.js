import React from 'react';

import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import './ExpenseItem.css';
import Card from '../UI/Card';


const ExpenseItem = (props) => {

    return (
        <Card className = "expense-item">
            <div className='temp'>
            <ExpenseDate date= {props.date}/>
            <ExpenseDetails amount={props.amount}  location={props.location}   title={props.title} />
            </div>
        </Card>
    ) 
}

export default ExpenseItem;