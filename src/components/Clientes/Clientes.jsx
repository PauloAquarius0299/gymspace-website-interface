// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import {motion} from 'framer-motion';
import {testimonialsData} from '../../data/testimonilsData.jsx';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";



import "./Clientes.css"
const Clientes = () => {
    const [selected, setSelected] = useState(0);
    const tLength = testimonialsData.length;
    const transition = {type: 'spring', duration: 3}

  return (
    <div className='Testimonials' id='clientes'>
        <div className="left-t">
            <span>Clientes</span>
            <span className='stroke-text'> O que eles</span>
            <span> dizem sobre nós</span>
            <span>
                {testimonialsData[selected].review}
            </span>
            <span>
                <span style={{color: 'var(--red)'}}>
                    {testimonialsData[selected].name}
                </span>{ " "}
                - {testimonialsData[selected].status}
            </span>
        </div>

        <div className="right-t">
            <motion.div
            initial={{opacity: 0, x: -100}}
            whileInView={{opacity: 1, x: 0}}
            transition={{...transition, duration: 2}}
            ></motion.div>
            <motion.div
            initial={{opacity: 0, x: 100}}
            whileInView={{opacity: 1, x: 0}}
            transition={{...transition, duration: 2}}
            ></motion.div>
            <motion.img 
            initial={{opacity: 0, x: 100}}
            animate={{opacity: 1, x: 0}}
            exit={{opacity: 0, x: -100}}
            src={testimonialsData[selected].image} alt="" />

            <div className='arrows'>

            <FaArrowLeft
            onClick={() => {
                selected === 0
                ? setSelected(tLength - 1)
                : setSelected((prev) => prev - 1);
             }}
            />
            <FaArrowRight 
            onClick={() => {
                selected === tLength - 1
                ? setSelected(0)
                : setSelected((prev) => prev + 1)
            }}
            />
            </div>
        </div>
        
    </div>
  )
}

export default Clientes