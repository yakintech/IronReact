import 'antd/dist/antd.css';
import '../../index.css';
import { Layout, Menu } from 'antd';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Webuserlist from './Webuserlist'
import Contactlist from './Contactlist'
import Formikexample from './Formikexample';
import React, { useEffect } from 'react'
import Productlist from './Productlist';
import Orderoperation from './Orderoperation';
import { OrderProvider } from '../../context/Ordercontext';
import { CategoryProvider } from '../../context/Categorycontext';

import Memosample from './Memosample';
import Category from './Category';
import Login from './Login';


const { Header, Content, Footer } = Layout;


function Admin() {


    return (
        <div>
            <BrowserRouter>
                <Layout className="layout">

                    <Header>

                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                            <Menu.Item key="1"><Link to="/">Web Users</Link></Menu.Item>
                            <Menu.Item key="2"><Link to="/Admin/Products">Products</Link></Menu.Item>
                            <Menu.Item key="3"><Link to="/Categories">Categories</Link></Menu.Item>
                            <Menu.Item key="4">Orders</Menu.Item>
                            <Menu.Item key="5"><Link to="/Contacts">Contact Messages</Link></Menu.Item>
                            <Menu.Item key="6"><Link to="/Formik">Formik Sample</Link></Menu.Item>
                            <Menu.Item key="7"><Link to="/Order">Order Sample</Link></Menu.Item>


                        </Menu>
                    </Header>
                    <Content style={{ padding: '0 50px' }}>
                        <div className="site-layout-content">

                            <Switch>
                                <Route exact path="/">
                                    <Webuserlist></Webuserlist>
                                </Route>
                                <Route exact path="/Login">
                                    <Login></Login>
                                </Route>
                                <Route exact path="/Order">
                                    <Memosample></Memosample>
                                    <OrderProvider>
                                        <Orderoperation></Orderoperation>
                                    </OrderProvider>

                                </Route>
                                <Route path="/Categories">
                                    <CategoryProvider>
                                        <Category></Category>
                                    </CategoryProvider>
                                </Route>
                                <Route path="/Contacts">
                                    <Contactlist></Contactlist>
                                </Route>
                                <Route path="/Formik">
                                    <Formikexample></Formikexample>
                                </Route>
                                <Route path="/Admin/Products">
                                    <Productlist></Productlist>
                                </Route>
                            </Switch>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </BrowserRouter>
        </div>
    )
}

export default Admin
