import React, { useContext, useState } from 'react';
import {AppContext} from '../context/AppContext';
const Budget = () => {
    const { budget,expenses,currency, dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);

    const handleChange = (e) => {
        setNewBudget(e.target.value);
    };


    const handleSubmit = () => {
        if (newBudget > 20000) {
            alert("Budget cannot be more than 20000");
        }
        else if(newBudget < totalExpenses)
        {
            alert("You cannot reduce the budget value lower than spending!")
        }
        else {
            dispatch({
                type: 'SET_BUDGET',
                payload: newBudget
            });
        }
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}{budget}</span>
            <br />
            <input
                type='number'
                value={newBudget}
                onChange={handleChange}
                min={1}
                max={20000}
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default Budget;