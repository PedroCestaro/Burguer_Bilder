import React, {Component} from 'react';
import Aux from '../../hoc/auxiliar';
import Burguer from '../../components/Burguer/Burguer'
import BuildControls from '../../components/Burguer/BildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burguer/OrderSummary/OrderSummary';


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
        totalPrice: 4,
        purchasable: false,
        purchasing: false
    }

    updatePurchaseState(ingredients){
        const sum = Object.keys(ingredients)/*transforming ingredient in an array again*/
            .map(igKey =>{
                return ingredients[igKey];
            })
            .reduce((sum, el)=>{
                return sum+el;
            },0);
        this.setState({purchasable: sum > 0 })    
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
        this.updatePurchaseState(updatedIngredients);
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
        const newPrice = oldPrice - priceDeduction;
         
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
        this.updatePurchaseState(updatedIngredients);
    }

    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    purchaseCancelHandler = () =>{
        this.setState({
            purchasing: false
        });
    }

    purchaseContinueHandler = () => {
        alert("You continue!");
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
               <Modal show={this.state.purchasing}
                    modalClosed={this.purchaseCancelHandler}
                    /*cancels the final purchase option*/
               >
                   <OrderSummary
                        ingredients={this.state.ingredients}
                        purchaseCancelled={this.purchaseCancelHandler}
                        purchaseContinued={this.purchaseContinueHandler}
                  />
               </Modal>
               <Burguer ingredients={this.state.ingredients/* adc state to the app*/}/>
               <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    purchasable = {this.state.purchasable}
                    ordered={this.purchaseHandler}
                    price={this.state.totalPrice}
                    />
           </Aux>
        );
    }
}

export default BurguerBilder;