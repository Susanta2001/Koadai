import React from "react";
import '../Navbar/Navbar.css'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div className="nav-bar d-flex justify-content-between align-items-center p-4 text-light position-fixed w-100">
      <div className="navbar-left d-flex align-items-center">
        <i class="bx bxl-twitter"></i>
        <i class="bx bxl-instagram"></i>
        <i class="bx bxl-linkedin"></i>
        <i class="bx bxl-youtube"></i>
      </div>
      <div className="navbar-right d-flex">
            <Link to='/'>Home</Link>
            <Link to='/'>About</Link>
            <Link to='/'>Contact</Link>
      </div>
    </div>
  );
}

export default Navbar;
