import React from 'react'

const Empresaitem = ({ empresa }) => {
  return(
    <div className='my-3 md:my-0 rounded bg-white p-4 hover:shadow-md'>
        <h3 className='font-bold hover:underline'>{empresa.nome}</h3>
        <h2 className='text-lg uppercase font-bold mb-2 text-roxo'>{empresa.cargo}</h2>
        <p>{empresa.atividades}</p>
    </div>
  )
}
export default Empresaitem