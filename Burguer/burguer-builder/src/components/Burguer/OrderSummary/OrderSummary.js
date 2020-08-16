import React from 'react';
import Aux from '../../../hoc/auxiliar';
import './styles.css';

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
            <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout? </p>
            <button className="buttonDanger" onClick={props.purchaseCancelled}>Cancel</button>
            <button className="buttonSuccess" onClick={props.purchaseContinued}>Continue</button>
        </Aux>
    )
};

export default orderSummary;