
import React, { useContext } from 'react';
import '../App.css'
import { AppContext } from '../context/AppContext';
const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);
    const handleChange = (option) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: option.currentTarget.value
        });
    }
    return (
        <div className='alert alert-secondary'>
            <label className='dropdown'>Currency</label>
            <select value={currency} onChange={handleChange} className='dropdown'>
                <option value="$">$ Dollar</option>
                <option value="£">£ Pound</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Ruppee</option>
            </select>
        </div>

    );
};
export default ExpenseItem;