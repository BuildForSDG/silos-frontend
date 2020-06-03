import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "popper.js/dist/umd/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js";


import home from "./components/home/home";
import about from "./components/about/about";
import categoriess from "./components/categories/categoriess";
import support from "./components/support/support";
import login from "./components/login/login";
import register from "./components/register/register";
import Navbar from "./components/navbar/navbar";

import './app.css'
import Footer from "./components/footer/footer";



function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route path="/" exact component={home} />
                <Route path="/about" component={about} />
                <Route path="/categories" component={categoriess} />
                <Route path="/support" component={support} />
                <Route path="/user/login" component={login} />
                <Route path="/user/register" component={register} />
            </Switch>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;