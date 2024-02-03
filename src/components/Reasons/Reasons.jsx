// eslint-disable-next-line no-unused-vars
import React from 'react'
import image1 from '../../assets/image1.jpg'
import image2 from '../../assets/image2.jpg'
import image3 from '../../assets/image3.jpg'
import image4 from '../../assets/image4.jpg'
import part1 from '../../assets/adidas.png';
import part2 from '../../assets/nike.png'
import part3 from '../../assets/nb.png'
import { FaCheckCircle } from "react-icons/fa";



import "./Reasons.css"

const Reasons = () => {
  return (
    <div className='Reasons' id='reasons'>
        <div className="left-r">
            <img src={image1} />
            <img src={image2} />
            <img src={image3} />
            <img src={image4} />
        </div>
        <div className='right-r'>
            <span>Os Motivos</span>

            <div>
                <span className='stroke-text'>Porque Nós</span>
                <span> Escolher?</span>
            </div>

            <div className='details-r'>
                <div>
                <FaCheckCircle className='icon' />
                    <span>MAIS DE 140+ COACHS EXPERIENTES</span>
                </div>
                <div>
                <FaCheckCircle className='icon' />
                    <span>TREINE DE FORMA MAIS INTELIGENTE E MAIS RÁPIDA DO QUE ANTES</span>
                </div>
                <div>
                <FaCheckCircle className='icon' />
                    <span>PROGRAMA GRATUITO PARA NOVO MEMBRO</span>
                </div>
                <div>
                <FaCheckCircle className='icon' />
                    <span>PARCEIROS CONFIAVEIS</span>
                </div>
            </div>
            <span style={{
                color: 'var(--gray)', 
                fontWeight: 'normal',
            }}
            >
                NOSSOS PARCEIROS</span>
                <div className="partners">
                    <img src={part1} alt="" />
                    <img src={part2} alt="" />
                    <img src={part3} alt="" />
                </div>
        </div>
        </div>
       
       
        
    
  )
}

export default Reasons