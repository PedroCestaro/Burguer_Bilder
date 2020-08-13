import React from 'react';
import BurguerIngredient from './BurguerIngredient/BurguerIngredient'
import './Burguer.css'


const burguer =(props) => {
    return(
        <div className="burguer">
            <BurguerIngredient type="bread-top"/>
        </div>
    );
};

export default burguer;