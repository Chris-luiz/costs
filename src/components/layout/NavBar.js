import { Link } from 'react-router-dom'
import Container from './Container'
import logo from '../../img/costs_logo.png'

const NavBar = () => {
    return (
        <nav className='bg-zinc-900 p-2'>
            <Container customClass='container'>
                <Link to="/">
                    <img src={logo} alt="Logo" />
                </Link>
                <ul className='flex items-center'>
                    <li className='text-white mr-4 hover:text-yellow-600'>
                        <Link to="/">Home</Link>
                    </li>
                    <li className='text-white mr-4 hover:text-yellow-600'>
                        <Link to="/projects">Projetos</Link>
                    </li>
                    <li className='text-white mr-4 hover:text-yellow-600'>
                        <Link to="/newproject">Novo Projeto</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}

export default NavBar