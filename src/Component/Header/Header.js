
import React from 'react';
import Cart from '../Cart/Cart';
import './Header.css';

function Header(props) {

    return (
        <React.Fragment>
            <header>
                <div className="header">
                        <div className="header-logo">
                            FOOD
                        </div>
                        <Cart arrFoodItems={props.arrFoodItems}  onCartListUpdate={props.onCartListUpdate}/>
                </div>

            </header>

        </React.Fragment>
    );
};

export default Header;