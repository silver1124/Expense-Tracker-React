
import React, { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm (props){

    const [enteredtitle, setenteredtitle] = useState('');
    const [enteredamount, setenteredamount] = useState('');
    const [entereddate, setentereddate] = useState('');

    const titleChangehandler = (event) => {
        setenteredtitle(event.target.value);
    };
    const amountChangehandler = (event) => {
        setenteredamount(event.target.value);
    };
    const dateChangehandler = (event) => {
        setentereddate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredtitle,
            amount: enteredamount,
            date: new Date(entereddate)
        };

        props.onSaveExpenseData(expenseData);
        setenteredtitle('');
        setenteredamount('');
        setentereddate('');
    };
    return (
        <form onSubmit = {submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Expense Title</label>
                    <input type="text" value= {enteredtitle} onChange={titleChangehandler} /> 
                </div>
                <div className='new-expense__control'>
                    <label>Expense Amount</label>
                    <input type="number" value= {enteredamount} onChange={amountChangehandler} /> 
                </div>
                <div className='new-expense__control'>
                    <label>Expense Date</label>
                    <input type="date" value= {entereddate} onChange={dateChangehandler} /> 
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='button' onClick={props.onCancel}>Cancel</button>
                <button type = "submit">Add Expense</button>
            </div>
        </form>);
}

export default ExpenseForm