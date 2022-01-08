import React,{useState} from "react";

import ExpenseForm from './ExpenseForm'

import './NewExpense.css';

const NewExpense = (props) => {
    
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
        
    }

    const [isEditing, setIsEditing] = useState(false);

    const EditingHandler = () => {
        setIsEditing(true);
    }

    const cancelClickHandler = () => {
        setIsEditing(false);
    }

    return (
        <div className="new-expense">
            { isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelClick={cancelClickHandler} />}
            {!isEditing && <button onClick={EditingHandler} >Create Expense</button>}
        </div>
    );
}

export default NewExpense;