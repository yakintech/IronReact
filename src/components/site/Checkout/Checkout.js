import React from 'react'
import Checkoutcart from './Checkoutcart'
import Checkoutform from './Checkoutform'

function Checkout() {
    return (
        <>
            <section className="shop checkout section">
                <div className="container">
                    <div className="row">
                        <Checkoutform></Checkoutform>
                        <Checkoutcart></Checkoutcart>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Checkout
