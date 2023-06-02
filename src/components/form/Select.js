const Select = ({ text, name, defaultValue, options, rest, value, error }) => {
    return (
        <div className='flex flex-col mb-4'>
            <label className='mb-2 font-bold' htmlFor={name}>{text}</label>

            <select
                className='p-2 bg-white'
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
