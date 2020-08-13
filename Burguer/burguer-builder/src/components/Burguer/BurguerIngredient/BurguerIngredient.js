import React, {Component} from 'react';
import styles from './BurguerIngredient.css';
import PropTypes from 'prop-types';


class BurguerIngredient extends Component{
    render() {
        let ingredient = null;

    switch (this.props.type){
        case('bread-bottom'):
            ingredient = <div className="breadBottom"
            style={styles.breadBottom} />;
            break;
        
        case('bread-top'):
                ingredient=(
                    <div className="breadTop"
                    style={styles.BreadTop}
                    >
                        <div className="seeds1" style={styles.Seeds1}/>
                        <div className="seeds2" style={styles.Seeds2}/>
                    </div>
                );
                break;
        
         case('meat'):
                ingredient = <div className="meat" style={styles.Meat}/>
                break;


        case('cheese'):
                ingredient = <div className="cheese" style={styles.Cheese}/>
                break; 

         case('salad'):
                ingredient = <div className="salad" style={styles.Salad}/>
                break;
                
         case('bacon'):
                ingredient = <div className="bacon" style={styles.bacon}/>
                break;
        
        default:
            ingredient= null;
    }

    return ingredient;

    }
} 

BurguerIngredient.PropTypes = {
    type: PropTypes.string.isRequired
    /*Como a interface do TypeScript*/
};

export default BurguerIngredient;