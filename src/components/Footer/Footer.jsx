// eslint-disable-next-line no-unused-vars
import React from 'react'
import logo from '../../assets/logo.png'
import "./Footer.css"
import { FaLinkedinIn, FaTiktok, FaTwitter, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='Footer-container'>
        <hr />
        <div className="footer">
            <div className='social-links'>
                <FaInstagram className='icon-s' />
                <FaLinkedinIn className='icon-s' />
                <FaTwitter className='icon-s' />
                <FaTiktok className='icon-s' />
            </div>
        </div>
        <div className="logo-f">
            <img src={logo} alt="" />
        </div>
        <p>GYMSPACE</p>

        <p>Copyright PAULO.DEV</p>

        <div className="blur blur-f-1"></div>
        <div className="blur blur-f-2"></div>
    </div>
  )
}

export default Footer