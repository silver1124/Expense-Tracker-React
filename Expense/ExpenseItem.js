import React from 'react';

import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import './ExpenseItem.css';
import Card from '../UI/Card';


const ExpenseItem = (props) => {
    const clickhandler = ()=> {
        console.log("Clicked!!")
    }
    return (
        <Card className = "expense-item">
            <div className='temp'>
            <ExpenseDate date= {props.date}/>
            <ExpenseDetails amount={props.amount}  location={props.location}   title={props.title} />
            <button onClick = {clickhandler} >Delete Expense</button>
            </div>            
        </Card>
    ) 
}

export default ExpenseItem;