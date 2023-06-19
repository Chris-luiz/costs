import styles from '../project/ProjectCard.module.css'

import { BsFillTrashFill } from 'react-icons/bs'

export function ServiceCard({ id, name, cost, description, handleRemove }) {
  const remove = (e) => {
    e.preventDefault()
    handleRemove(id, cost)
  }

  return (
    <div className='p-4 border border-gray-500 rounded-md m-2'>
      <h4 className='bg-zinc-800 text-yellow-500 p-2 text-lg mb-4 text-center'>{name}</h4>
      <p className='text-gray-700 mb-2'>
        <span className='text-bold'>Custo total:</span> R${cost}
      </p>
      <p className='text-gray-700 mb-2'>{description}</p>
      <div className={styles.project_card_actions}>
        <button onClick={remove}>
          <BsFillTrashFill />
          Excluir
        </button>
      </div>
    </div>
  )
}

export default ServiceCard