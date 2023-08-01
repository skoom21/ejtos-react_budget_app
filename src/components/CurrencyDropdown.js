import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
//styles
import '../components/CurrencyDropdown.css'

const CurrencyDropdown = () => {
    const { currency, dispatch } = useContext(AppContext);
    const handleChange = (e) => {
        const newCurrency = e.target.value;
        dispatch({
            type: 'CHG_CURRENCY',
            payload: newCurrency,
        });
    };

    return (
        <div>
            <select class="Currency" onChange={handleChange}>
                <option class="Currency-Option" value={currency}>Currency {currency}</option>
                <option class="Currency-Option" value="£">£ Pound</option>
                <option class="Currency-Option" value="$">$ Dollar</option>
                <option class="Currency-Option" value="€">€ Euro</option>
                <option class="Currency-Option" value="₹">₹ Rupee</option>
            </select>
        </div>
    );
};

export default CurrencyDropdown;