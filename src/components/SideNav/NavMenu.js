import React from 'react';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import '../Toolbar/NavBar.css';

const NavMenu = () => {
    return (
        <div className="nav-menu">
            <Link to="/aboutme">
                <button className="nav-menu-bubble nav-menu-bubble" type="button" id="aboutme">
                    <h6>About Me</h6>
                </button>
            </Link>
            <Link to="/projects">
                <button className="nav-menu-bubble" id="projects">
                    <h6>Projects</h6>
                </button>
            </Link>
            <Link to="/contact">
                <button className="nav-menu-bubble" id="contact">
                    <h6>Contact</h6>
                </button>
            </Link>
        </div>
    )
}

export default NavMenu;