import React from 'react'
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Footer from './Footer';
import Header from './Header';
import Home from './Home';

function Site() {
    return (
        <div>
            <Header></Header>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <Home></Home>
                    </Route>
                </Switch>
            </BrowserRouter>
            <Footer></Footer>
        </div>
    )
}

export default Site
