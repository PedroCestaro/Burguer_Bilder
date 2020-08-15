import React from 'react';

import './styles.css'

const buidlControl = (props) =>(
    <div className="buildControl">
        <div className="label">{props.label}</div>
            <button className="less"
            onClick={props.removed}
            disabled={props.disabled}
            >Less</button>
            
            <button className="more" 
            onClick={props.added}/*referecing to the propertie of state change*/
            >More</button>

    </div>
);

export default buidlControl;