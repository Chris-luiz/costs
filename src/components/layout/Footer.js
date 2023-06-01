import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

function Footer() {
    return (
        <footer className='bg-zinc-900 text-white text-center p-8'>
            <ul className='flex justify-center list-none'>
                <li className='text-3xl my-0 mx-4 hover:text-yellow-500 cursor-pointer'><FaFacebook /></li>
                <li className='text-3xl my-0 mx-4 hover:text-yellow-500 cursor-pointer'><FaInstagram /></li>
                <li className='text-3xl my-0 mx-4 hover:text-yellow-500 cursor-pointer'><FaLinkedin /></li>
            </ul>
            <p className='mt-4'>
                <span className='text-yellow-500 font-bold'>Costs</span> &copy;
            </p>
        </footer>
    )
}

export default Footer


