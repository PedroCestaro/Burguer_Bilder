import React from 'react';
import BurguerIngredient from './BurguerIngredient/BurguerIngredient'
import './Burguer.css';

const burguer =(props) => {
    return(
        <div className="burguer">
            <BurguerIngredient type="bread-top"/>
            <BurguerIngredient type="cheese"/>
            <BurguerIngredient type="meat"/>
            <BurguerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burguer;