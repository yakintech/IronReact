import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu } from 'antd';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Webuserlist from './components/admin/Webuserlist'
import Contactlist from './components/admin/Contactlist'
import Formikexample from './components/admin/Formikexample';
import React, { useEffect } from 'react'
import Productlist from './components/admin/Productlist';


const { Header, Content, Footer } = Layout;

function App() {

  useEffect(() => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ "email": "cagatay.yildiz@bilgeadam.com", "password": "123" })
    };


    fetch("http://localhost:3001/token", requestOptions)
      .then((res) => res.json())
      .then((result) => {

        localStorage.setItem("tokenkey", result.token);
      })

  }, [])


  return (
    <div>
      <BrowserRouter>


        <Layout className="layout">

          <Header>

            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
              <Menu.Item key="1"><Link to="/">Web Users</Link></Menu.Item>
              <Menu.Item key="2"><Link to="/Admin/Products">Products</Link></Menu.Item>
              <Menu.Item key="3">Orders</Menu.Item>
              <Menu.Item key="4"><Link to="/Contacts">Contact Messages</Link></Menu.Item>
              <Menu.Item key="5"><Link to="/Formik">Formik Sample</Link></Menu.Item>

            </Menu>
          </Header>
          <Content style={{ padding: '0 50px' }}>
            <div className="site-layout-content">

              <Switch>
                <Route exact path="/">
                  <Webuserlist></Webuserlist>
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

  );
}

export default App;
