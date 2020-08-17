import React from 'react';
import './styles.css';
import burguerLogo from '../../assets/Images/burger-logo.png';

const logo =(props) =>(
    <div className="logo">
        <img src={burguerLogo} alt="MyBurguer"/>
    </div>
);

export default logo;
