import styles from './Select.module.css'

function Select({ text, name, defaultValue, options, rest, value, error }) {
    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}</label>

            <select
                id={name}
                name={name}
                value={value}
                {...rest}
            >
                <option disabled value={defaultValue}>Selectione uma opção</option>
                {options.map((options) => (
                    <option value={options} key={options}>
                        {options}
                    </option>
                ))}

            </select>

            {error &&
                <span className='text-sm text-red-500 font-sans'>{error}</span>
            }
        </div>
    )
}

export default Select

{/* onChange={handleOnChange} 
                    value={value} */}