import React from 'react'

const Footer = ({ currentDate }) => {
  return (
    <div>
      <h3 className='text-4xl font-bold text-center uppercase mt-10 mb-5 text-roxo'>Habilidades</h3>
      <p className='text-center my-8 py-4 border-t-2'>
        Html, CSS, JavaScrpit, NodeJs, React, ReactNative, API, SVN, Git e Github. 
        Mysql, Oracle, Postgree, SQL Server. Conhecimento técnico de hardware e AWS.
        <br />
        <br />
        confira em meu github.
        <br />
        <a href='https://github.com/fasdacombr'>fasdacombr</a>
      </p>
      <p className='text-center my-8 py-4 border-t-2'>Latest version: {currentDate}</p>
    </div>
  )
}
export default Footer
