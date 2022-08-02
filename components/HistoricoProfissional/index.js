import React from 'react'
import EmpresaItem from './EmpresaItem'

const empresas = [
  {
    id: 1,
    nome: "FX2 Tecologia - 05/2014 a 01/2022",
    cargo: "Programador",
    atividades: "Desenvolvimento e manutenção de sistemas de controle de acesso com foco em catracas e controladores de porta; Manutenção e melhorias aos sistemas legados(ACESSO, XPnetw e outros) da empresa, desenvolvido através da linguagem Pascal(Dlphi) com Banco de Dados Firebird; Desenvolvimento de aplicação, de Ordem de Serviço, com tecnologia Datasnap; Projetos de APIs para controle de acesso com Nodejs, Horse, React, JS."
  }
]

const Empresa = () => {
    return (
      <div>
        <h3 className='mx-6 md:mx-0 text-4xl font-bold text-center uppercase mt-10 text-roxo'>Historicos Profissional na Área</h3>
        <div className='md:grid md:grid-cols-1 md:gap-2 md:my-6'>
          {empresas.map((empresa, i) => (
              <EmpresaItem key={'i' + i} empresa={empresa} />
            ))}
        </div>
      </div>
    )
  }
  export default Empresa