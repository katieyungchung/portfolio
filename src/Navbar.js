import './Navbar.css';
import { NavLink } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

/* Default NavBar at the top of the page
Includes home, explore, filter, search, and login/signup buttons */
export const Navbar = () => {
    return (
     
        <div className="navbar">
            <div className="top-left-name"><h1>Katie Chung</h1></div>
            <div className="navlinks">
                <NavLink to="/" end activeClassName="active-link" className="nav-link">ABOUT</NavLink>
                <NavLink to="/" end activeClassName="active-link" className="nav-link">PROJECTS</NavLink>
                <NavLink to="/" end activeClassName="active-link" className="nav-link">EXPERIENCE</NavLink>
                <NavLink to="/" end activeClassName="active-link" className="nav-link">RESUME</NavLink>
            </div>
        </div>

    )
}

export default Navbar