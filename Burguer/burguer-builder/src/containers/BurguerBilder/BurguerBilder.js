import React, {Component} from 'react';
import Aux from '../../hoc/auxiliar';
import Burguer from '../../components/Burguer/Burguer'
import BuildControls from '../../components/Burguer/BildControls/BuildControls';


const INGREDIENTS_PRICES /*Global const*/={
    salad:  0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

class BurguerBilder extends Component{
    /*State will be manioulated here, 'cause, in this papge is where it's shows*/
    state = {/*adding indexes (igKey) inside the transformedIngredients Array*/
        ingredients:{
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat:0
        }, 
        totalPrice: 4
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];/*cacthing the value of each igredient now*/
        const updatedCount = oldCount + 1; /*Changing the state to a new, with the value of the igredient*/
        const updatedIngredients ={/*copying the state of the ingredients, and add new data*/
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount; /*establishing const to the new state*/
        
        const priceAddition = INGREDIENTS_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
         
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
        
    }
    
    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0){
            return;
        } 
        const updatedCount = oldCount - 1; 
        const updatedIngredients ={
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount; 
        
        const priceDeduction = INGREDIENTS_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceAddition;
         
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
        
    }

    render() {

        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        return(
           <Aux>
               <Burguer ingredients={this.state.ingredients/* adc state to the app*/}/>
               <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
              />
           </Aux>
        );
    }
}

export default BurguerBilder;