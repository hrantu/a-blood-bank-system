import React, { useContext } from 'react';
import logo from '../../images/logo.png';
import './Header.css';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt=""/>
            <nav>
            
            <Link className="button" to="/requestScreen">Start Journey</Link>
            </nav>
        </div>
    );
};

export default Header;