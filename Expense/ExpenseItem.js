import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import './ExpenseItem.css';
import Card from '../UI/Card';


const ExpenseItem = (props) => {

    const [amount, setAmount] = useState(props.amount);
    const clickhandler = ()=> {
        setAmount('100')
    }
    return (
        <Card className = "expense-item">
            <div className='temp'>
            <ExpenseDate date= {props.date}/>
            <ExpenseDetails amount={amount}  location={props.location}   title={props.title} />
            <button onClick = {clickhandler} >Update Expense</button>
            </div>            
        </Card>
    ) 
}

export default ExpenseItem;