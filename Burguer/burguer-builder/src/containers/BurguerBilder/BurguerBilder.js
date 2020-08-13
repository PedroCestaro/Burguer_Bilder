import React, {Component} from 'react';
import Aux from '../../hoc/auxiliar';
import Burguer from '../../components/Burguer/Burguer'

class BurguerBilder extends Component{
    /*State will be manioulated here, 'cause, in this papge is where it's shows*/
    render() {
        return(
           <Aux>
               <Burguer/>
           </Aux>
        );
    }
}

export default BurguerBilder;