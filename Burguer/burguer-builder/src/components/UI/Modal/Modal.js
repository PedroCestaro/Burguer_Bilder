import React from 'react';
import './styles.css'

const modal = (props) => (
    <div className="modal">
        {props.children}
    </div>
);

export default modal;