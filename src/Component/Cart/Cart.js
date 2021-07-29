import React, { useState } from 'react';
import './Cart.css';
import YourCart from '../YourCart/YourCart';

function Cart(props) {
    const [showCart, setShowCart] = useState(false);

    const showCartHandler = () =>{
        if(showCart == false)
        { 
            setShowCart(true);
        }else{
            setShowCart(false);
        }
       
    }
    return (
        <React.Fragment>
            <div className="cart" onClick ={showCartHandler} >
                <span>Your Cart</span>
                <span className="cart-item"> {props.arrFoodItems.length} </span>
            </div>
            { showCart && <YourCart onShowCart={showCartHandler} arrFoodItems = {props.arrFoodItems}  onCartListUpdate={props. onCartListUpdate} /> }
        </React.Fragment>

    );
};

export default Cart;