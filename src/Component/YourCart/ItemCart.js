import React, { useState, useEffect } from 'react';
import './ItemCart.module.css';

let PrizeObj;


function ItemCart(props) {

    let [amount, setAmount] = useState(props.amount);
    let [prizeOfItems, setPrizeItem] = useState(0);
    
        PrizeObj = props.arrFoodItems;

        PrizeObj.map( (e)=>{
            if(props.title === e.title)
            {
                e.amount = amount;
            }
        })
        console.log(PrizeObj);

    let prizeCount = () =>{
        
        prizeOfItems = 0;
        PrizeObj.map((element) =>{
            prizeOfItems += (element.prize * element.amount)
        }
    )

    }
    useEffect( ()=> {

        if(amount === 0) {
            props.onCartListUpdate(props.title);
        }
        console.log("useEffectCall");
        prizeCount();
        props.onPrizeAll(prizeOfItems);
        setPrizeItem(prizeOfItems);
    }, [amount])
   
    const decrementHandler = () => {
        console.log("pre=" + amount);
        if (amount > 0) {
            setAmount(--amount);
        }
    }
    const incrementHandler = () => {
        console.log("pre=" + amount);
        setAmount(++amount);
    }
   

    return (
        <React.Fragment>
            <div className="item">
                <div className="item-left">
                    <p className="item-name">{props.title}</p>
                    <p className="item-prize">${props.prize} </p>
                    {/* <p className="item-dec">{props.dec}</p> */}
                </div>
                <div className="item-right">
                    <p>Amount:</p>
                    <span> {amount}</span>
                    <button className="increment-btn" onClick={decrementHandler}>-</button>
                    <button className="increment-btn" onClick={incrementHandler}>+</button> <br />
                    {/* <button className="add-btn" > + Add</button> */}
                    {/* onClick={addCartHandler} */}
                </div>
            </div>
        </React.Fragment>
    );
};

export default ItemCart;