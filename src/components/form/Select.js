import styles from './Select.module.css'

function Select({ text, name, defaultValue, options, handleOnChange, value }) {
    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}</label>

            <select
                id={name}
                name={name}
                defaultValue={defaultValue}
                onChange={handleOnChange}
                value={value || ''}
            >
                <option disabled value={defaultValue}>Selectione uma opção</option>
                {options.map((options) => (
                    <option value={options.id} key={options.id}>
                        {options.name}
                    </option>
                ))}

            </select>
        </div>
    )
}

export default Select

{/* onChange={handleOnChange} 
                    value={value} */}