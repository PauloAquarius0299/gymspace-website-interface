// eslint-disable-next-line no-unused-vars
import React from 'react';
import {plansData} from '../../data/plansData'
import { CiCircleCheck } from "react-icons/ci";


import "./Plans.css"

const Plans = () => {
  return (
    <div className='plans-container'>
        <div className="blur plans-blur-1"></div>
        <div className="blur plans-blur-2"></div>
        <div className="programs-header">
            <span className='stroke-text'>VEM COMEÇAR</span>
            <span>SUA JORNADA</span>
            <span className='stroke-text'>CONOSCO</span>
        </div>

        {/*plans card*/}
        <div className="plans">
            {plansData.map((plan, i) => (
                <div className='plan' key={i}>
                    {plan.icon}
                    <span>{plan.name}</span>
                    <span>$ {plan.price}</span>

                    <div className="features">
                        {plan.features.map((feature, i) => (
                            // eslint-disable-next-line react/jsx-key
                            <div className='feature'>
                                <CiCircleCheck className='icon' />
                                <span key={i}>{feature}</span>
                            </div>
                        ))}
                    </div>
                    <div>
                        <span style={{
                            cursor: 'pointer',
                        }}>Veja mais beneficios + </span>
                    </div>
                    <button className='btn'>Assine Agora</button>
                </div> 
            ))}
        </div>
    </div>
  )
}

export default Plans