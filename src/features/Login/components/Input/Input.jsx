import { useState } from 'react';
import './Input.scss';

const Input = ({ type = 'text', placeholder, lable, id, name, getInputValue }) => {
    const [inputValue, setInputValue] = useState('');
    const handleValueChange = (value) => {
        setInputValue(value);
        getInputValue(inputValue);
    }
    return (
        <div className="input-template">
            {/* <label className="input-template-label"
                htmlFor={id}>
                {lable}
            </label> */}
            <input className="input-template-input"
                type={type}
                id={id}
                name={name}
                placeholder={placeholder}
                value={inputValue}
                onChange={(e) => { handleValueChange(e.target.value) }}
            >
            </input>
        </div>
    )
}

export default Input;