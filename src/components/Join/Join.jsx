// eslint-disable-next-line no-unused-vars
import React, {useRef} from 'react'
import emailjs from '@emailjs/browser';

import "./Join.css"

const Join = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_aar57so', 'template_3z6z0a8', form.current, 'kwrBqUm37zOCUoicb')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

  return (
    <div className='Join' id='join-us'>
        <div className="left-j">
            <hr />
            <div>
                <span className='stroke-text'>PRONTO PARA</span>
                <span>SUBIR DE NIVEL</span>
            </div>
            <div>
                <span>SEU CORPO</span>
                <span className='stroke-text'>MAIS FITNESS?</span>
            </div>
        </div>
        <div className="right-j">

            <form ref={form} className='email-container' onSubmit={sendEmail}>
                <input type="email" name="user_email" placeholder='Digite seu email' />
                <button className='btn btn-j'>Se Escreva</button>
            </form>
        </div>
    </div>
  )
}

export default Join