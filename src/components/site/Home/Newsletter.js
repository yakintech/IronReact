import React from 'react'

function Newsletter() {
    return (
     
            <>
                <section className="shop-services section home">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-12">
                                {/* Start Single Service */}
                                <div className="single-service">
                                    <i className="ti-rocket" />
                                    <h4>Free shiping</h4>
                                    <p>Orders over $100</p>
                                </div>
                                {/* End Single Service */}
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                                {/* Start Single Service */}
                                <div className="single-service">
                                    <i className="ti-reload" />
                                    <h4>Free Return</h4>
                                    <p>Within 30 days returns</p>
                                </div>
                                {/* End Single Service */}
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                                {/* Start Single Service */}
                                <div className="single-service">
                                    <i className="ti-lock" />
                                    <h4>Sucure Payment</h4>
                                    <p>100% secure payment</p>
                                </div>
                                {/* End Single Service */}
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                                {/* Start Single Service */}
                                <div className="single-service">
                                    <i className="ti-tag" />
                                    <h4>Best Peice</h4>
                                    <p>Guaranteed price</p>
                                </div>
                                {/* End Single Service */}
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Shop Services Area */}
                {/* Start Shop Newsletter  */}
                <section className="shop-newsletter section">
                    <div className="container">
                        <div className="inner-top">
                            <div className="row">
                                <div className="col-lg-8 offset-lg-2 col-12">
                                    {/* Start Newsletter Inner */}
                                    <div className="inner">
                                        <h4>Newsletter</h4>
                                        <p> Subscribe to our newsletter and get <span>10%</span> off your first purchase</p>
                                        <form action="mail/mail.php" method="get" target="_blank" className="newsletter-inner">
                                            <input name="EMAIL" placeholder="Your email address" required type="email" />
                                            <button className="btn">Subscribe</button>
                                        </form>
                                    </div>
                                    {/* End Newsletter Inner */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>

     
    )
}

export default Newsletter
