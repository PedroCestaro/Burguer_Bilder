import React from 'react';
import './styles.css';
import BuildControl from './BuildControl/BuildControl';


const controls = [
    {label:'Salad', type: 'salad'},
    {label:'Bacon', type: 'bacon'},
    {label:'Cheese', type: 'cheese'},
    {label:'Meat', type: 'meat'}/*all the types been established here*/
];


const buidControls /*Not a component, small case*/ = (props) =>(
    <div className="buildControls">
        <p>Current Price: <strong>{props.price.toFixed(2)/*pointer to the totalPrice*/}</strong></p>
        {controls.map(crtl =>(/*foraeach control in the map*/
                <BuildControl 
                key={crtl.label} 
                label={crtl.label} 
                type={crtl.type}
                added = {() =>props.ingredientAdded(crtl.type)}/*accessing the state change, on 'more' buttom*/
                removed = {()=>props.ingredientRemoved(crtl.type)}/*spcefiying the type of 'ingredients'*/
                disabled = {props.disabled[crtl.type]}
                />
            ))}
        <button 
        className="orderButton"
        disabled={!props.purchasable}
        >ORDER NOW</button>
    </div>
);/*Not a jsx file, can use parenteses*/

export default buidControls;