import React from 'react'
import EducationItem from './EducationItem'

const degrees = [
  {
    degree: 'Graduação',
    subject: 'Sistema de Informação',
    institution: 'Universidade Estácio de Sá'
  },
  {
    degree: 'FullStack Master',
    subject: 'Desenvolvedor Fullstack JavaScript',
    institution: 'Dev Pleno'
  },
  {
    degree: 'C# com .net',
    subject: 'Fundamentos C#',
    institution: 'balta.io'
  }
]

const Education = () => {
  return (
    <div>
      <h3 className='text-4xl font-bold text-center uppercase mt-10 mb-5 text-roxo'>Educação</h3>
      <div className='mx-6 md:mx-0 md:grid md:grid-cols-2 leading-none bg-white rounded-lg shadow-lg'>
        {degrees.map((degree, i) => (
          <EducationItem key={'i' + i} degree={degree} />
        ))}
      </div>
    </div>
  )
}
export default Education
