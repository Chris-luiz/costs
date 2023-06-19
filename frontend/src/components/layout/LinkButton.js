import { Link } from 'react-router-dom'

const LinkButton = ({ to, text }) => {
    return (
        <Link className='bg-zinc-900 text-white hover:text-yellow-500 transition-colors px-2 py-3' to={to}>
            {text}
        </Link>
    )
}

export default LinkButton