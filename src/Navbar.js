import './Navbar.css';
import { NavLink } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Star from './assets/star-icon.png';

/* Default NavBar at the top of the page
Includes home, explore, filter, search, and login/signup buttons */
export const Navbar = () => {
    return (
     <>
        <div className="navbar">
            <NavLink to="/" end><div className="top-left-name"><img className="star-icon" src={Star} /><h1>Katie Chung</h1></div></NavLink>
            <div className="navlinks">
                    <NavLink 
                        to="/" 
                        end 
                        className={({ isActive }) => isActive ? 'nav-link active-link' : 'nav-link'}
                    >
                        home
                    </NavLink>
                    
                    <NavLink 
                        to="/works" 
                        end 
                        className={({ isActive }) => isActive ? 'nav-link active-link' : 'nav-link'}
                    >
                        works
                    </NavLink>
                    <a href="http://bit.ly/katieyungchung" target="_blank">art</a>
                    <NavLink 
                        to="/about" 
                        end 
                        className={({ isActive }) => isActive ? 'nav-link active-link' : 'nav-link'}
                    >
                        about
                    </NavLink>
                </div>
        </div>
        {/* <hr style={{ width: '93%', border: '0.5px solid black', margin: '10px auto' }} /> */}
    </>
    )
}

export default Navbar