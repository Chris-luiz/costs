const SubmitButton = ({ text }) => {
    return (
        <div>
            <button className='bg-zinc-900 text-white px-2 py-3 hover:text-yellow-500 transition-colors' type="submit">{text}</button>
        </div>
    )
}

export default SubmitButton