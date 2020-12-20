import React, { useState, useEffect, useContext } from 'react'
import cartContext from '../../../context/Cartcontext'
import { config } from '../../../env/config';



function Cart() {
    const {cart, setCart} = useContext(cartContext);

    useEffect(() => {


        let localcartdata = JSON.parse(localStorage.getItem('cart'));

        if(localcartdata == null){

            let data =
            {
                pcount: 0,
                totalprice: 0,
                products: new Array()
            };
          
            localStorage.setItem('cart',JSON.stringify(data));
            setCart(data);

        }
        else{
            setCart(localcartdata);
        }

    }, []);


    const removeitem = (id) => {

        let data = {};
        data = cart;
        let sayac = 0;

        //sepetteki ürünlere tek tek bakıyor. O ürünü bulup ( if koşulu ) sepetten çıkarıyor
        data.products.forEach(element => {

            if (element._id == id) {
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
                                cart.products.map((item) => (<li key={item._id}>
                                    <a href="#" className="remove" title="Remove this item"><i className="fa fa-remove" onClick={() => removeitem(item._id)} /></a>
                                    <a className="cart-img" href="#"><img src={config.url + "/images/productimages/" + item.images[0]} alt="#" /></a>
                                    <h4><a href="#">{item.name}</a></h4>
                                    <p className="quantity">{item.count} x - <span className="amount">$ {item.cartprice}</span></p>
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
                    <a href="/Checkout" className="btn animate">Checkout</a>
                </div>
            </div>


        </div>
    )
}

export default Cart
