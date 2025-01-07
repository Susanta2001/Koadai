import React from "react";
import '../Navbar/Navbar.css'
import {NavLink} from 'react-router-dom'

function Navbar() {
  return (
    <div className="nav-bar d-flex justify-content-between align-items-center p-4 text-light position-fixed w-100">
      <div className="navbar-left d-flex align-items-center">
        <NavLink to='https://www.facebook.com/profile.php?id=61570458852555'><i class="bx bxl-facebook"></i></NavLink>
        <NavLink to='https://www.instagram.com/koadai_/?igsh=bWI3a3pzNW9jMzBn&utm_source=qr'><i class="bx bxl-instagram"></i></NavLink>
        <NavLink to='https://www.linkedin.com/company/koadai/posts/?feedView=all'><i class="bx bxl-linkedin"></i></NavLink>
        <NavLink to='https://www.youtube.com/@Koadai'><i class="bx bxl-youtube"></i></NavLink>
      </div>
      <div className="navbar-right d-flex">
            <NavLink to='/' id='home' order='1'>Home</NavLink>
            <NavLink to='/about' id='about' order='2'>About</NavLink>
            <NavLink to='/services' id='services' order='3'>Services</NavLink>
            <NavLink to='/contact' id='contact' order='4'>Contact</NavLink>
      </div>
    </div>
  );
}

export default Navbar;
