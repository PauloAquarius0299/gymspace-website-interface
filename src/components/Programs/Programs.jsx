// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Programs.css';
import {programsData} from '../../data/programsData';
import { FaArrowRight } from "react-icons/fa";


const Programs = () => {
  return (
    <div className='Programs' id='programs'>
        {/* header */}
        <div className="programs-header">
            <span className='stroke-text'>Explore o</span>
            <span>melhor Programa</span>
            <span className='stroke-text'>pra seu Shape</span>
        </div>


        <div className="program-categories">
            {programsData.map((program) => (
                // eslint-disable-next-line react/jsx-key
                <div className='category'>
                    {program.image}
                    <span>{program.heading}</span><span>{program.details}</span>
                    <div className="join-now"><span>Apriveite Agora </span>
                    <FaArrowRight className='icon' />
                    </div>
                </div>
            ))}
            
        </div>
    </div>
  )
}

export default Programs