import React from 'react';

import { Link } from 'react-router-dom';

import './NavBar.css';

const NavBar = (props) => {
    return (
        <div className='NavBar-Container'>
            <div>
                ⚡
            </div>
            <div className='NavBar-Empty'>
            </div>
            <div>
                <Link to='/'>HOME</Link>
            </div>
            <div>
                <Link to='/login'>LOGIN</Link>
            </div>
        </div>
    );
}

export default NavBar;