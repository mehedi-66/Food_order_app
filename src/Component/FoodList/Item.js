import React,{useState} from 'react';
import './Item.css';

function Item(props) {

    let [amount, setAmount] = useState(props.amount);
    
    const decrementHandler = ()=>{
        console.log("pre=" + amount);
        if(amount > 0) {
            setAmount(--amount);
        }
        console.log("post" + amount);    
    }
    const incrementHandler = () => {
        console.log("pre=" + amount);
        setAmount(++amount);
        console.log("post" + amount);    
        
    }
    const addCartHandler = ()=>{
        let itemObj = {
            id: Math.random().toString(),
            title: props.title,
            prize: props.prize,
            amount: amount,
        };
        if(amount !== 0)
        {
            props.onCartItems(itemObj);
        }
       
    }

    return (
        <React.Fragment>
            <div className="item">
                <div className="item-left">
                    <p className="item-name">{props.title}</p> 
                    <p className="item-prize">${props.prize} </p>
                    <p className="item-dec">{props.dec}</p>
                </div>
                <div className="item-right">
                    <p>Amount:</p> 
                    <span> {amount}</span>
                    <button className="increment-btn" onClick={decrementHandler}>-</button>
                    <button className="increment-btn" onClick={incrementHandler}>+</button> <br />
                    <button className="add-btn" onClick={addCartHandler}>+ Add</button>
                 </div>
            </div>
        </React.Fragment>
    );
};

export default Item;