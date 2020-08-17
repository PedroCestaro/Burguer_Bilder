import React from 'react';
import './styles.css';
import NavigationItem from './NavigationItem/NavigationItem';


const navigationItems = () =>(
    <ul className="navigationItems">
        <NavigationItem link="/" active/*true*/>Burguer Bilder</NavigationItem>
        <NavigationItem link="/">Checkout</NavigationItem>
    </ul>
);

export default navigationItems;