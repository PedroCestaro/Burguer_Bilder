import React from 'react';
import './styles.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = (props) =>(
    <header className="toolbar">
        <div>MENU</div>
        <Logo/>
        <nav>
           <NavigationItems/>
        </nav>
    </header>
);

export default toolbar;