import React from 'react';
import {Link} from "react-router-dom"
import Booking from './Booking';


const Nav = () => {
    return (
        <>
            <div className="nav-menu">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/">About</Link></li>
                            <li><Link to="/">Menu</Link></li>
                            <li><Link to="/booking" element={<Booking />}>Reservations</Link></li>
                            <li><Link to="/">Order</Link></li>
                            <li><Link to="/">Log In</Link></li>
                        </ul>
                    </div>
        </>
    );
}

export default Nav;