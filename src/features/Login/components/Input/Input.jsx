import { useState } from 'react';
import styles from './Input.module.scss';

const Input = ({ type = 'text', placeholder, lable, id, name, getInputValue }) => {
    const [inputValue, setInputValue] = useState('');
    const handleValueChange = (value) => {
        setInputValue(value);
        getInputValue(inputValue);
    }
    return (
        <div className={styles.input_template}>
            {/* <label className="input-template-label"
                htmlFor={id}>
                {lable}
            </label> */}
            <input className={styles.input_template_input}
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