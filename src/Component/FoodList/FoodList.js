import React from 'react';
import Item from './Item';
import './FoodList.css';
function FoodList(props) {

    return (
        <React.Fragment>
            <div className="food-list">
                <div className="food-list-item">
                    {
                        props.arrFood.map(element => 
                            <Item
                                onCartItems={props.onCartItems}
                                key={element.id}
                                title={element.title}
                                prize={element.prize}
                                dec={element.dec}
                                amount={element.amount}

                            />
                        )
                    }

                    {/* <Item />
                    <Item /> */}
                </div>


            </div>
        </React.Fragment>
    );

};

export default FoodList;