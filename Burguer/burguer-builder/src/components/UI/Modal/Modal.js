import React from 'react';
import './styles.css';
import Aux from '../../../hoc/auxiliar';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => (
    <Aux>
        <Backdrop show={props.show}
         clicked={props.modalClose}
         />
        <div 
            className="modal"
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show? '1':'0'
            }}
        >
            {props.children}
        </div>
    </Aux>
);

export default modal;