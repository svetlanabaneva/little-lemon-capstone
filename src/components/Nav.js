import React from 'react';
import logo from '../assets/icons/logo.svg';
const Nav = () => {
    return (
        <header>
            <div className="container">
                <div className="header-wrap">
                    <div className="nav-logo"><img src={logo} alt="Little Lemon Logo"></img>
                    </div>
                    <div className="nav-menu">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/">About</a></li>
                            <li><a href="/">Menu</a></li>
                            <li><a href="/">Reservations</a></li>
                            <li><a href="/">Order</a></li>
                            <li><a href="/">Log In</a></li>
                        </ul>
                    </div>
            </div>
            </div>

        </header>
    );
}

export default Nav;