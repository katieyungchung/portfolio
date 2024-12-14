import './Navbar.css';
import { NavLink } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

/* Default NavBar at the top of the page
Includes home, explore, filter, search, and login/signup buttons */
export const Navbar = () => {
    return (
        <div className="navbar">
            <NavLink to="/" end activeClassName="active-link" className="nav-link">Home</NavLink>
        </div>
    )
}

export default Navbar