import React, { useState, useEffect,useContext } from 'react'
import { getall } from '../../services/baseservice'
import Cart from './Home/Cart';
import cartContext from '../../context/Cartcontext'


import 'antd/dist/antd.css';

function Header() {

    const {cart, setCart} = useContext(cartContext);

    const [categories, setCategories] = useState([]);




    useEffect(async () => {

        let data = await getall('/api/categories');
        setCategories(data);

    }, [])

    return (
        <>
            <header className="header shop">
                {/* Topbar */}
                <div className="topbar">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-12 col-12">
                                {/* Top Left */}
                                <div className="top-left">
                                    <ul className="list-main">
                                        <li><i className="ti-headphone-alt" /> +060 (800) 801-582</li>
                                        <li><i className="ti-email" /> support@shophub.com</li>
                                    </ul>
                                </div>
                                {/*/ End Top Left */}
                            </div>
                            <div className="col-lg-8 col-md-12 col-12">
                                {/* Top Right */}
                                <div className="right-content">
                                    <ul className="list-main">
                                        <li><i className="ti-location-pin" /> Store location</li>
                                        <li><i className="ti-alarm-clock" /> <a href="#">Daily deal</a></li>
                                        <li><i className="ti-user" /> <a href="#">My account</a></li>
                                        <li><i className="ti-power-off" /><a href="login.html#">Login</a></li>
                                    </ul>
                                </div>
                                {/* End Top Right */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Topbar */}
                <div className="middle-inner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2 col-md-2 col-12">
                                {/* Logo */}
                                <div className="logo">
                                    <a href="index.html"><img src="images/logo.png" alt="logo" /></a>
                                </div>
                                {/*/ End Logo */}
                                {/* Search Form */}
                                <div className="search-top">
                                    <div className="top-search"><a href="#0"><i className="ti-search" /></a></div>
                                    {/* Search Form */}
                                    <div className="search-top">
                                        <form className="search-form">
                                            <input type="text" placeholder="Search here..." name="search" />
                                            <button value="search" type="submit"><i className="ti-search" /></button>
                                        </form>
                                    </div>
                                    {/*/ End Search Form */}
                                </div>
                                {/*/ End Search Form */}
                                <div className="mobile-nav" />
                            </div>
                            <div className="col-lg-8 col-md-7 col-12">
                                <div className="search-bar-top">
                                    <div className="search-bar">
                                        <form>
                                            <input name="search" placeholder="Search Products Here....." type="search" />
                                            <button className="btnn"><i className="ti-search" /></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-3 col-12">
                                <div className="right-bar">
                                    {/* Search Form */}
                                    <div className="sinlge-bar">
                                        <a href="#" className="single-icon"><i className="fa fa-heart-o" aria-hidden="true" /></a>
                                    </div>
                                    <div className="sinlge-bar">
                                        <a href="#" className="single-icon"><i className="fa fa-user-circle-o" aria-hidden="true" /></a>
                                    </div>
                                    <div className="sinlge-bar shopping">
                                        <a href="#" className="single-icon"><i className="ti-bag" />
                                        {
                                            cart.pcount > 0 ? (<span className="total-count">{cart.pcount}</span>) : <></>
                                        } 
                                       
                                       
                                        </a>
                                        {/* Shopping Item */}
                                        <Cart></Cart>
                                        {/*/ End Shopping Item */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Header Inner */}
                <div className="header-inner">
                    <div className="container">
                        <div className="cat-nav-head">
                            <div className="row">
                                <div className="col-lg-3">
                                    <div className="all-category">
                                        <h3 className="cat-heading"><i className="fa fa-bars" aria-hidden="true" />CATEGORIES</h3>
                                        <ul className="main-category">
                                            {
                                                categories.map((item) => (<li><a href="#">{item.name}</a></li>))
                                            }
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-9 col-12">
                                    <div className="menu-area">
                                        {/* Main Menu */}
                                        <nav className="navbar navbar-expand-lg">
                                            <div className="navbar-collapse">
                                                <div className="nav-inner">
                                                    <ul className="nav main-menu menu navbar-nav">

                                                        <li className="active"><a href="/">Home</a></li>
                                                        {/* <NavLink to="/about">About</NavLink> */}
                                                        <li><a href="#">Service</a></li>
                                                        <li><a href="#">Shop</a></li>
                                                        <li><a href="#">Pages</a></li>
                                                        <li><a href="#">Blog</a></li>
                                                        <li><a href="/Contact">Contact Us</a></li>



                                                    </ul>
                                                </div>
                                            </div>
                                        </nav>
                                        {/*/ End Main Menu */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*/ End Header Inner */}
            </header>
        </>

    )
}

export default Header
