// eslint-disable-next-line no-unused-vars
import React from 'react';
import Header from '../Header/Header';
import heart from '../../assets/heart.png'
import hero_image from '../../assets/hero02.png'
import NumberCounter from 'number-counter'

import calories from  '../../assets/calories1.png'

import {motion} from 'framer-motion';

import "./Hero.css";

const Hero = () => {
  const transition = {type: 'spring', duration : 3}
  const mobile = window.innerWidth<=768 ? true : false;

  return (
    <div className='hero' id='inicio'>
      
        <div className="left-h">
            <Header />
            {/*the best ad */}
            <div className="the-best-ad">
                <motion.div
                initial={{left: mobile? "178px": '238px'}}
                whileInView={{left: '8px'}}
                transition={{...transition, type: 'tween'}}
                >
                </motion.div>
                <span>A melhor academia da região</span>
            </div>


            <div className='hero-text'>
              <div>
                <span className='stroke-text'>O Shape
                </span><span> ideal</span>
                <span> <br /> para seu corpo</span>
                </div>
                <div className='text1'>
                  <span>
                    Desperte Seu Melhor Eu na GymSpace. Mais do que um Treino, <br />  um Estilo de Vida Ativo
                  </span>
                </div>
            </div>
            <div className='figures'>
              <div>
                <span>
                  <NumberCounter end={140} start={100} delay='4' preFix='+' />
                </span>
                <span> Coachs experientes</span>
                </div>
                <div>
                <span>
                <NumberCounter end={978} start={600} delay='4' preFix='+' />
                </span>
                <span> Membros</span>
                </div>
                <div>
                <span>
                <NumberCounter end={50} start={10} delay='4' preFix='+' />
                </span>
                <span> Programas fitness</span>
                </div>
            </div>

            {/*hero buttons */}
            <div className="hero-buttons">
              <button className="btn">Vamos Começar</button>
              <button className="btn">Saiba Mais</button>
            </div>
        </div>
        <div className="right-h">
          <button className='btn'>Se Escreva</button>

          <motion.div 
          initial={{right: '-1rem'}}
          whileInView={{right: '4rem'}}
          transition={transition}
          className="heart-rate">
            <img src={heart} alt="" />
            <span>Heart Rate</span><span>116 bpm</span>
          </motion.div>

          {/*hero image*/}
          
            <img src={hero_image} alt="" className='hero-image' />

          {/*calories */}
          <motion.div 
          initial={{right: '37rem'}}
          whileInView={{right: '28rem'}}
          transition={transition}
          className="calories">
            <img src={calories} alt="" />
            <div>
              <span>Queima de Calorias</span>
            <span>220 kcal</span>
            </div>
            
          </motion.div>


        </div>
    </div>
  )
}

export default Hero