import React from 'react';
import Aux from '../../../hoc/auxiliar';

const orderSummary = (props) =>{

    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return( <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]/*value*/}
                 </li>)
        });

    return(
        <Aux>
            <h3>Your Order</h3>
            <p> A delicious burguer with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to Checkout? </p>
        </Aux>
    )
};

export default orderSummary;