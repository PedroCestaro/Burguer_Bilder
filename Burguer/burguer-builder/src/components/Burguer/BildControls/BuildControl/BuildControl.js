import React from 'react';

import './styles.css'

const buidlControl = (props) =>(
    <div className="buildControl">
        <div className="label">{props.label}</div>
            <button className="less">Less</button>
            <button className="more">More</button>
    </div>
);

export default buidlControl;