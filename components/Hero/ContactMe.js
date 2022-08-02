import React from 'react'
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsappSquare, FaEnvelope  } from 'react-icons/fa'

const ContactMe = () => {
  return (
    <div className='mx-8 px-8 relative border-roxo border rounded md:mx-0 md:px-16 pb-4 pt-10 mt-6'>
      <h3 className='absolute bg-roxo text-white py-2 px-6 top-0 -mt-5 text-2xl font-bold uppercase'>Contato</h3>
      <p className='text-center md:text-left'>
        <a href='https://www.linkedin.com/in/fasdacombr/' title='LinkedIn Profile'>
          <FaLinkedin className='text-5xl md:text-6xl inline-block md:mr-2' />
        </a>
        <a href='https://github.com/fasdacombr' title='GitHub Profile'>
          <FaGithub className='text-5xl md:text-6xl inline-block md:mr-2' />
        </a>       
        <a href='https://www.instagram.com/fasdacombr/' title='Instagram'>
          <FaInstagram className='text-5xl md:text-6xl inline-block md:mr-8' />
        </a>
        <p>fasdacombr</p>

        <a href='https://api.whatsapp.com/send?phone=5581984633488&text=Ol%C3%A1%20Deixe%20sua%20mensagem' title='WhatsApp'>
          <FaWhatsappSquare className='text-5xl md:text-6xl inline-block md:mr-8' />
        </a>
        <p>+5581984633488</p>

        <a href='mailto:flavio_125@hotmail.com' title='E-mail'>
          <FaEnvelope className='text-5xl md:text-6xl inline-block' />
        </a>
        <p>flavio_125@hotmail.com</p>
        
      </p>
    </div>
  )
}
export default ContactMe
