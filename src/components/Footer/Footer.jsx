import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../assets/css/Footer.css'
import koadaiLogo from '../../assets/images/koadai-logo.png'

function Footer() {
  return (
    <>
    <div className='footer-div w-100 h-100 d-flex justify-content-center align-items-center'>
        <div className="logo-div w-25 d-flex align-items-center justify-content-center h-100 ">
            <img src={koadaiLogo} alt=""/>
        </div>
        <div className="link-div w-75 d-flex">
            <div className="footer-card w-25 h-100">
                Koadai is your first choice of making something awesome for your company. Get your K-ticket and make the best brand in your region.
            </div>
            <div className="footer-card w-25 h-100 justify-content-center d-flex flex-column">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/services">Services</NavLink>
                <NavLink to="/contact">Contact Us</NavLink>
            </div>
            <div className="footer-card w-25 h-100 d-flex flex-column">
                <a href="/">Privacy Policies</a>
                <a href="/">Terms & Conditions</a>
                <a href="/">Customer Services</a>
            </div>
            <div className="footer-card w-25 h-100">
                Connect with us to tell us more about your company and lets transform it into a brand which no one has ever though of.
            </div>
        </div>
    </div>
    <hr />
        <p className='text-center'>Developed by KOADAI</p>
    </>
  )
}

export default Footer
