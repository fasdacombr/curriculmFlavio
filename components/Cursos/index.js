import React from 'react'
import CursoItem from './CursoItem'

const degrees = [
    {
        degree: 'FullStack Master',
        subject: 'Desenvolvedor Fullstack JavaScript',
        institution: 'Dev Pleno'
    },
    {
        degree: 'C# com .net',
        subject: 'Fundamentos C#',
        institution: 'balta.io'
    },
    {
        degree: 'Semana Spring React',
        subject: 'SDS 8.0 - DSMovie',
        institution: 'Devsuperior'
    },
    {
        degree: 'Semana Spring React',
        subject: 'SDS 9.0 - DSMeta',
        institution: 'Devsuperior'
    }
]

const Curso = () => {
    return (
        <div>
            <h3 className='text-4xl font-bold text-center uppercase mt-10 mb-5 text-roxo'>Cursos</h3>
            <div className='mx-6 md:mx-0 md:grid md:grid-cols-2 leading-none bg-white rounded-lg shadow-lg'>
                {degrees.map((degree, i) => (
                    <CursoItem key={'i' + i} degree={degree} />
                ))}
            </div>
        </div>
    )
}
export default Curso