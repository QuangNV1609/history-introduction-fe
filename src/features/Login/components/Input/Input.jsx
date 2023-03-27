import { useState } from 'react';
import styles from './Input.module.scss';

const Input = ({ type = 'text', placeholder, id, name, getInputValue }) => {
    const [inputValue, setInputValue] = useState('');
    getInputValue(inputValue);
    const handleValueChange = (e) => {
        setInputValue(e.target.value);
    }
    return (
        <div className={styles.input_template}>
            <input className={styles.input_template_input}
                type={type}
                id={id}
                name={name}
                placeholder={placeholder}
                value={inputValue}
                onChange={handleValueChange}
            ></input>
        </div>
    )
}

export default Input;