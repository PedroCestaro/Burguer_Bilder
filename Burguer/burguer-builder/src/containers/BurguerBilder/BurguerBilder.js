import React, {Component} from 'react';
import Aux from '../../hoc/auxiliar';
import Burguer from '../../components/Burguer/Burguer'

class BurguerBilder extends Component{
    /*State will be manioulated here, 'cause, in this papge is where it's shows*/
    state = {/*adding indexes (igKey) inside the transformedIngredients Array*/
        ingredients:{
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat:0
        }
    }
    
    render() {
        return(
           <Aux>
               <Burguer ingredients={this.state.ingredients/* adc state to the app*/}/>
               <div>Build Controls</div>
           </Aux>
        );
    }
}

export default BurguerBilder;