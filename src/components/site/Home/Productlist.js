import React, { useState, useEffect, useContext } from 'react'
import { config } from '../../../env/config';
import { getall } from '../../../services/baseservice'
import cartContext from '../../../context/Cartcontext'

function Productlist() {


    const { cart, setCart } = useContext(cartContext);
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);


    useEffect(async () => {

        let data = await getall('/api/categories');
        setCategories(data);

        let products = await getall('/api/products');
        setProducts(products);

    }, []);



    //Buradaki item tıklanılan ürün
    const addcart = (item) => {

        let cartproductcount = cart.pcount + 1;
        let carttotalprice = cart.totalprice + item.price;

        //sepette ürün var mı kontrolü?
        let cartcontrol = cart.products.find(q => q._id == item._id);

        let newproduct = cartcontrol;

        if (newproduct != undefined) {
            newproduct.count = newproduct.count + 1;
            newproduct.cartprice =  item.price;
        }
        else {
            item.count = 1;
            item.cartprice =item.price;
            cart.products.push(item);
        }



        let lastcartproducts = cart.products

        let data =
        {
            pcount: cartproductcount,
            totalprice: carttotalprice,
            products: lastcartproducts
        };

        localStorage.setItem('cart',JSON.stringify(data));

        setCart(data);
    }



    const getproductsbycategory = async (categoryid) => {
        let products = await getall('/api/products/getproductsbycategoryid/' + categoryid);
        setProducts(products);
    }

    return (


        <>
            {/* Start Product Area */}
            <div className="product-area section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-title">
                                <h2>Trending Item</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="product-info">
                                <div className="nav-main">
                                    {/* Tab Nav */}
                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        {

                                            categories.map((item) => (<li key={item._id} onClick={() => getproductsbycategory(item._id)} className="nav-item"><a className="nav-link" data-toggle="tab" href="#man" role="tab">{item.name}</a></li>))
                                        }

                                    </ul>
                                    {/*/ End Tab Nav */}
                                </div>
                                <div className="tab-content" id="myTabContent">
                                    {/* Start Single Tab */}
                                    <div className="tab-pane fade show active" id="man" role="tabpanel">
                                        <div className="tab-single">
                                            <div className="row">
                                                {
                                                    products.map((item, key) =>
                                                    (


                                                        <div key={item._id} className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                            <div className="single-product">
                                                                <div className="product-img">
                                                                    <a href="product-details.html">
                                                                        <img className="default-img" src={config.url + "/images/productimages/" + item.images[0]} alt="#" />
                                                                        <img className="hover-img" src={config.url + "/images/productimages/" + item.images[0]} alt="#" />
                                                                    </a>
                                                                    <div className="button-head">
                                                                        <div className="product-action">
                                                                            <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                                                            <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                                                            <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                                                        </div>
                                                                        <div className="product-action-2">
                                                                            <span onClick={() => addcart(item)}>Add to cart</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="product-content">
                                                                    <h3><a href="product-details.html">{item.name}</a></h3>
                                                                    <div className="product-price">
                                                                        <span>${item.price}</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>


                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    {/*/ End Single Tab */}
                                    {/* Start Single Tab */}
                                    <div className="tab-pane fade" id="women" role="tabpanel">
                                        <div className="tab-single">
                                            <div className="row">
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <a href="product-details.html">
                                                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                            </a>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <a title="Add to cart" href="#">Add to cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><a href="product-details.html">Women Hot Collection</a></h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <a href="product-details.html">
                                                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                            </a>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <a title="Add to cart" href="#">Add to cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><a href="product-details.html">Awesome Pink Show</a></h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <a href="product-details.html">
                                                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                            </a>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <a title="Add to cart" href="#">Add to cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><a href="product-details.html">Awesome Bags Collection</a></h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <a href="product-details.html">
                                                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <span className="new">New</span>
                                                            </a>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <a title="Add to cart" href="#">Add to cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><a href="product-details.html">Women Pant Collectons</a></h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <a href="product-details.html">
                                                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                            </a>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <a title="Add to cart" href="#">Add to cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><a href="product-details.html">Awesome Bags Collection</a></h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <a href="product-details.html">
                                                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <span className="price-dec">30% Off</span>
                                                            </a>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <a title="Add to cart" href="#">Add to cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><a href="product-details.html">Awesome Cap For Women</a></h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <a href="product-details.html">
                                                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                            </a>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <a title="Add to cart" href="#">Add to cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><a href="product-details.html">Polo Dress For Women</a></h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <a href="product-details.html">
                                                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <span className="out-of-stock">Hot</span>
                                                            </a>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <a title="Add to cart" href="#">Add to cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><a href="product-details.html">Black Sunglass For Women</a></h3>
                                                            <div className="product-price">
                                                                <span className="old">$60.00</span>
                                                                <span>$50.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*/ End Single Tab */}
                                    {/* Start Single Tab */}
                                    <div className="tab-pane fade" id="kids" role="tabpanel">
                                        <div className="tab-single">
                                            <div className="row">
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <a href="product-details.html">
                                                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                            </a>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <a title="Add to cart" href="#">Add to cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><a href="product-details.html">Women Hot Collection</a></h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <a href="product-details.html">
                                                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                            </a>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <a title="Add to cart" href="#">Add to cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><a href="product-details.html">Awesome Pink Show</a></h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <a href="product-details.html">
                                                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                            </a>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <a title="Add to cart" href="#">Add to cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><a href="product-details.html">Awesome Bags Collection</a></h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <a href="product-details.html">
                                                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <span className="new">New</span>
                                                            </a>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <a title="Add to cart" href="#">Add to cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><a href="product-details.html">Women Pant Collectons</a></h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <a href="product-details.html">
                                                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                            </a>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <a title="Add to cart" href="#">Add to cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><a href="product-details.html">Awesome Bags Collection</a></h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <a href="product-details.html">
                                                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <span className="price-dec">30% Off</span>
                                                            </a>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <a title="Add to cart" href="#">Add to cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><a href="product-details.html">Awesome Cap For Women</a></h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <a href="product-details.html">
                                                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                            </a>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <a title="Add to cart" href="#">Add to cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><a href="product-details.html">Polo Dress For Women</a></h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <a href="product-details.html">
                                                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <span className="out-of-stock">Hot</span>
                                                            </a>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <a title="Add to cart" href="#">Add to cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><a href="product-details.html">Black Sunglass For Women</a></h3>
                                                            <div className="product-price">
                                                                <span className="old">$60.00</span>
                                                                <span>$50.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*/ End Single Tab */}
                                    {/* Start Single Tab */}
                                    <div className="tab-pane fade" id="accessories" role="tabpanel">
                                        <div className="tab-single">
                                            <div className="row">
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <a href="product-details.html">
                                                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                            </a>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <a title="Add to cart" href="#">Add to cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><a href="product-details.html">Women Hot Collection</a></h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <a href="product-details.html">
                                                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                            </a>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <a title="Add to cart" href="#">Add to cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><a href="product-details.html">Awesome Pink Show</a></h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <a href="product-details.html">
                                                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                            </a>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <a title="Add to cart" href="#">Add to cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><a href="product-details.html">Awesome Bags Collection</a></h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <a href="product-details.html">
                                                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <span className="new">New</span>
                                                            </a>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <a title="Add to cart" href="#">Add to cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><a href="product-details.html">Women Pant Collectons</a></h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <a href="product-details.html">
                                                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                            </a>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <a title="Add to cart" href="#">Add to cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><a href="product-details.html">Awesome Bags Collection</a></h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <a href="product-details.html">
                                                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <span className="price-dec">30% Off</span>
                                                            </a>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <a title="Add to cart" href="#">Add to cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><a href="product-details.html">Awesome Cap For Women</a></h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <a href="product-details.html">
                                                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                            </a>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <a title="Add to cart" href="#">Add to cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><a href="product-details.html">Polo Dress For Women</a></h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <a href="product-details.html">
                                                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <span className="out-of-stock">Hot</span>
                                                            </a>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <a title="Add to cart" href="#">Add to cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><a href="product-details.html">Black Sunglass For Women</a></h3>
                                                            <div className="product-price">
                                                                <span className="old">$60.00</span>
                                                                <span>$50.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*/ End Single Tab */}
                                    {/* Start Single Tab */}
                                    <div className="tab-pane fade" id="essential" role="tabpanel">
                                        <div className="tab-single">
                                            <div className="row">
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <a href="product-details.html">
                                                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                            </a>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <a title="Add to cart" href="#">Add to cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><a href="product-details.html">Women Hot Collection</a></h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <a href="product-details.html">
                                                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                            </a>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <a title="Add to cart" href="#">Add to cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><a href="product-details.html">Awesome Pink Show</a></h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <a href="product-details.html">
                                                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                            </a>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <a title="Add to cart" href="#">Add to cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><a href="product-details.html">Awesome Bags Collection</a></h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <a href="product-details.html">
                                                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <span className="new">New</span>
                                                            </a>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <a title="Add to cart" href="#">Add to cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><a href="product-details.html">Women Pant Collectons</a></h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <a href="product-details.html">
                                                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                            </a>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <a title="Add to cart" href="#">Add to cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><a href="product-details.html">Awesome Bags Collection</a></h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <a href="product-details.html">
                                                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <span className="price-dec">30% Off</span>
                                                            </a>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <a title="Add to cart" href="#">Add to cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><a href="product-details.html">Awesome Cap For Women</a></h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <a href="product-details.html">
                                                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                            </a>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <a title="Add to cart" href="#">Add to cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><a href="product-details.html">Polo Dress For Women</a></h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <a href="product-details.html">
                                                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <span className="out-of-stock">Hot</span>
                                                            </a>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <a title="Add to cart" href="#">Add to cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><a href="product-details.html">Black Sunglass For Women</a></h3>
                                                            <div className="product-price">
                                                                <span className="old">$60.00</span>
                                                                <span>$50.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*/ End Single Tab */}
                                    {/* Start Single Tab */}
                                    <div className="tab-pane fade" id="prices" role="tabpanel">
                                        <div className="tab-single">
                                            <div className="row">
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <a href="product-details.html">
                                                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                            </a>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <a title="Add to cart" href="#">Add to cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><a href="product-details.html">Women Hot Collection</a></h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <a href="product-details.html">
                                                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                            </a>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <a title="Add to cart" href="#">Add to cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><a href="product-details.html">Awesome Pink Show</a></h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <a href="product-details.html">
                                                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                            </a>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <a title="Add to cart" href="#">Add to cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><a href="product-details.html">Awesome Bags Collection</a></h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <a href="product-details.html">
                                                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <span className="new">New</span>
                                                            </a>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <a title="Add to cart" href="#">Add to cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><a href="product-details.html">Women Pant Collectons</a></h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <a href="product-details.html">
                                                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                            </a>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <a title="Add to cart" href="#">Add to cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><a href="product-details.html">Awesome Bags Collection</a></h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <a href="product-details.html">
                                                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <span className="price-dec">30% Off</span>
                                                            </a>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <a title="Add to cart" href="#">Add to cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><a href="product-details.html">Awesome Cap For Women</a></h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <a href="product-details.html">
                                                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                            </a>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <a title="Add to cart" href="#">Add to cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><a href="product-details.html">Polo Dress For Women</a></h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <a href="product-details.html">
                                                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <span className="out-of-stock">Hot</span>
                                                            </a>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <a title="Add to cart" href="#">Add to cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><a href="product-details.html">Black Sunglass For Women</a></h3>
                                                            <div className="product-price">
                                                                <span className="old">$60.00</span>
                                                                <span>$50.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*/ End Single Tab */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>


    )
}

export default Productlist
