import React from 'react';
import Aux from '../../hoc/auxiliar';
import styles from './Layout.css';


const layout = (props) =>(
    <Aux/*usando aux, não precisa colocar um container*/>
    <div>ToolBar,SideDrawer,Backdrop</div>
    <main className="content"
    style={styles.content}
    >
        {props.children}
    </main>
    </Aux>
);
export default layout;