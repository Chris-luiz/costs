import { forwardRef } from 'react'
import styles from './Input.module.css'

const Input = forwardRef(function Input({ type, text, name, placeholder, rest, error }, ref) {

    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}</label>

            <input
                className={error && 'outline outline-2 outline-red-500'} 
                type={type}
                ref={ref}
                id={name}
                name={name}
                placeholder={placeholder}
                {...rest}
            />

            {error &&
                <span className='text-sm text-red-500 font-sans'>{error}</span>
            }

        </div>
    )
});

export default Input