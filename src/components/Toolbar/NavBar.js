import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import NavMenu from '../SideNav/NavMenu';
import Backdrop from '../Backdrop/Backdrop';
import './NavBar.css';


const NavBar = () => {

    const [state, setState] = useState({ clicked: false });

    return (
        <div className="nav">
            <div className="logo"><img src="/Logo.png" className="logo" alt="Logo" /></div>
            <div className="navbar">
                <FaBars onClick={() => { setState({ clicked: !state.clicked }) }} className="menu-btn" type="button" color="#FFFFFF" />
            </div>
            {
                state.clicked === true ?
                    <NavMenu />
                    : null
            }
            {
                state.clicked === true ?
                    <Backdrop />
                    : null
            }
        </div>
    )
}

export default NavBar;