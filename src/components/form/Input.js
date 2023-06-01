import styles from './Input.module.css'

function Input({ type, text, name, placeholder, onChange, value, rest, error }) {
    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}</label>
            <input type={type}
                id={name}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                {...rest}
            />

            {error && 
                <span>{error}</span>
            }
        </div>
    )
}

export default Input