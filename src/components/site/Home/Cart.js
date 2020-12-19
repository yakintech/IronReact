import React, { useState, useEffect, useContext } from 'react'
import cartContext from '../../../context/Cartcontext'



function Cart() {
    const {cart, setCart} = useContext(cartContext);

    useEffect(() => {
        let data =
        {
            pcount: 0,
            totalprice: 0,
            products: [
                // { id: 3, name: "IPhone", price: 50, count: 2, img: "iron.jpg" },

            ]
        };

        
        setCart(data);

    }, []);


    const removeitem = (id) => {

        let data = {};
        data = cart;
        let sayac = 0;
        data.products.forEach(element => {

            if (element.id == id) {
                data.pcount = data.pcount - element.count;
                data.totalprice = data.totalprice - (element.price * element.count);
                data.products.splice(sayac, 1);
            }
            sayac++;
        });


        let passdata = {
            pcount:data.pcount,
            totalprice:data.totalprice,
            products: data.products
        }
        setCart(passdata);


    }


    return (
        <div>
            <div className="shopping-item">
                <div className="dropdown-cart-header">
                    <span>{cart.pcount} Items</span>
                    <a href="#">View Cart</a>
                </div>

                <ul className="shopping-list">
                    {
                        cart.products == undefined ? <></> : 
                        cart.products.length > 0 ?
                            (
                                cart.products.map((item) => (<li key={item.id}>
                                    <a href="#" className="remove" title="Remove this item"><i className="fa fa-remove" onClick={() => removeitem(item.id)} /></a>
                                    <a className="cart-img" href="#"><img src="https://via.placeholder.com/70x70" alt="#" /></a>
                                    <h4><a href="#">{item.name}</a></h4>
                                    <p className="quantity">{item.count}x - <span className="amount">${item.price}</span></p>
                                </li>))

                            )
                            :
                            <></>
                    }

                </ul>

                <div className="bottom">
                    <div className="total">
                        <span>Total</span>
                        <span className="total-amount">$ {cart.totalprice}</span>
                    </div>
                    <a href="checkout.html" className="btn animate">Checkout</a>
                </div>
            </div>


        </div>
    )
}

export default Cart
