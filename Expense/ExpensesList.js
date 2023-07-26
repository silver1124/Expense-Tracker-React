import React from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';

const ExpenseList = (props) => {
    if (props.items.length === 0) {
        return <h3 className="expense-list__fallback">No Expense Found</h3>;
    } else if (props.items.length === 1) {
        return <h3 className="expense-list__fallback">Only single Expense here. Please add more..</h3>;
    }

    const expenseContent = props.items.map((expense) => (
        <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            location={expense.location}
        />
    ));

    return <ul className="expense-list">{expenseContent}</ul>;
};

export default ExpenseList;
