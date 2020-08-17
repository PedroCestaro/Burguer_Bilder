import React from 'react';
import Aux from '../../hoc/auxiliar';
import styles from './Layout.css';
import ToolBar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SidwDrawer';

const layout = (props) =>(
    <Aux/*usando aux, não precisa colocar um container*/>
    <ToolBar/>
    <SideDrawer/>
    <main className="content"
    style={styles.content}
    >
        {props.children}
    </main>
    </Aux>
);
export default layout;