import loading from '../../img/loading.svg'

const Loading = () => {
    return(
        <div className='w-full h-full flex justify-center items-center'>
            <img src={loading} alt="Loading" className={'w-12'}/>
        </div>
    )
}

export default Loading;