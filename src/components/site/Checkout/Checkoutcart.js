import React, {useContext} from 'react'
import cartContext from '../../../context/Cartcontext'


function Checkoutcart() {

    const { cart, setCart } = useContext(cartContext);

    return (
        <>
        
                        
        <div className="col-lg-4 col-12">
                            <div className="order-details">
                                {/* Order Widget */}
                                <div className="single-widget">
                                    <h2>CART  TOTALS</h2>
                                    <div className="content">
                                        <ul>
                                            <li>Sub Total<span>{cart.totalprice} $</span></li>
                                            <li>(+) Shipping<span>10 $</span></li>
                                            <li className="last">Total<span>{cart.totalprice + 10} $</span></li>
                                        </ul>
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                    
        </>
    )
}



export default Checkoutcart
