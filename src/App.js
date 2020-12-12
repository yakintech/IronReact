import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu } from 'antd';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import React, { useEffect } from 'react'
import Login from './components/admin/Login';
import Admin from './components/admin/Admin';


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
        <Layout>
          <Route exact path="/Login">
            <Login></Login>
          </Route>
          <Route exact path="/admin">
            <Admin></Admin>
          </Route>
        </Layout>
      </BrowserRouter>


    </div>

  );
}

export default App;
