
import './ExpenseForm.css';

function ExpenseForm (){

    const Changehandler = (event) => {
        console.log(event.target.value);
    }
    return (
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Expense Title</label>
                    <input type="text" onChange={Changehandler} /> 
                </div>
                <div className='new-expense__control'>
                    <label>Expense Amount</label>
                    <input type="number" onChange={Changehandler} /> 
                </div>
                <div className='new-expense__control'>
                    <label>Expense Date</label>
                    <input type="date" onChange={Changehandler} /> 
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type = "submit">Add Expense</button>
            </div>
        </form>);
}

export default ExpenseForm