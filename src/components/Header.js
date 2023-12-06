import {  Link } from "react-router-dom";
import logo from '../assets/icons/logo.svg';
import Nav from "./Nav.js"

const Header = () => {
    return (
        <header>
        < Link to="/"> 
            <div className="header-wrap">
            <div className="nav-logo"><img src={logo} alt="Little Lemon Logo"></img>
        </div></div>
        </Link>
        <Nav />
        </header>
        );
    }
    
    export default Header;