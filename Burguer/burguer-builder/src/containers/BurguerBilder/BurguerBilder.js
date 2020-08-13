import React, {Component} from 'react';
import Aux from '../../hoc/Aux';

class BurguerBilder extends Component{
    /*State will be manioulated here, 'cause, in this papge is where it's shows*/
    render() {
        return(
           <Aux>
               <div>Burguer</div>
               <div>Build Controls</div>
           </Aux>
        );
    }
}

export default BurguerBilder;