import React,{useState} from 'react';
import Item from './ItemCart';
import Styles from './YourCart.module.css';
function YourCart(props) {
   
    const [PrizeAll, setPrizeAll] = useState(0);
    // console.log(props.arrFoodItems);
    const getPrize = (value)=>{
        setPrizeAll(value);
    }
    return (
        <React.Fragment>
            <div className={Styles.foodList}>
                <div className= {Styles.foodListItem}>
                    <p className={Styles.cartHeader}>Your Added Itmes</p>
                    {
                        props.arrFoodItems.map(element => 
                            <Item
                                onCartListUpdate = {props.onCartListUpdate}
                                onPrizeAll={getPrize}
                                arrFoodItems={props.arrFoodItems}
                                // onCartItems={props.onCartItems}
                                key={element.id}
                                title={element.title}
                                prize={element.prize}
                                // dec={element.dec}
                                amount={element.amount}

                            />
                        )
                    }

                    <p className={Styles.prize}>Total: {PrizeAll}</p>
                    <button  className={Styles.btn} onClick={props.onShowCart}> Order </button>
                    <button className={`${Styles.btn} ${Styles.cancel}`} onClick={props.onShowCart}> Cancel </button>


                    {/* <Item />
                    <Item /> */}
                </div>


            </div>
        </React.Fragment>
    );

};

export default YourCart;