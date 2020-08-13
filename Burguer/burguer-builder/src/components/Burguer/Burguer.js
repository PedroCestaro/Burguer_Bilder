import React from 'react';
import BurguerIngredient from './BurguerIngredient/BurguerIngredient'
import './Burguer.css';

const burguer =(props) => {
    /*keys() = got the keys of an object and turn into an array*/
    const transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => { /*now that the ingredients is an array, to manipulate the values, using map*/
            return [...Array(props.ingredients[igKey])]/*JavaScript method, to create the array with the ingredients length. For eahch igKey, is adding a term in the array*/
                .map((_, i) => {/*accessing the index of the arrays*/
                 return <BurguerIngredient key={igKey + i} type={igKey}/>
                    console.log(igKey);
                });
        
        });

    return(
        <div className="burguer">
            <BurguerIngredient type="bread-top"/>
                {transformedIngredients}
            <BurguerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burguer;