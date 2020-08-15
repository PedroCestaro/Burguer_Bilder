import React from 'react';
import './styles.css';
import BuildControl from './BuildControl/BuildControl';


const controls = [
    {label:'Salad', type: 'salad'},
    {label:'Bacon', type: 'bacon'},
    {label:'Cheese', type: 'cheese'},
    {label:'Meat', type: 'meat'}
];


const buidControls /*Not a component, small case*/ = (props) =>(
    <div className="buildControls">
        {controls.map(crtl =>(/*foraeach control in the map*/
                <BuildControl key={crtl.label} label={crtl.label} />
            ))}
    </div>
);/*Not a jsx file, can use parenteses*/

export default buidControls;