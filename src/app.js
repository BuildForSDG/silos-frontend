import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import store from "./store";
import { Provider } from 'react-redux';
import jwt_decode from "jwt-decode";

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
import Alert from "./components/alert/alert";
import setAuthToken from "../src/utils/setAuthToken";
import { setCurrentUser, logoutUser } from "../src/actions/authActions";
import CreateProduct from "./components/products/createProduct";
import ViewProduct from "./components/products/viewProduct";
import ViewUser from "./components/users/viewUser";
import AllProducts from "./components/products/allProducts";

import './app.css'
import Footer from "./components/footer/footer";

if (localStorage.jwtToken) {
	setAuthToken(localStorage.jwtToken)

	//decode the jwt token
	const decoded = jwt_decode(localStorage.jwtToken)

	//set current user
	store.dispatch(setCurrentUser(decoded))

	const currentTime = Date.now() / 1000
	if (decoded.exp < currentTime) {
		//logout user
		store.dispatch(logoutUser())

		//redirect to login
		window.location.href = '/login'
	}
}

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Navbar />
                <Alert />
                <Switch>
                    <Route path="/" exact component={AllProducts} />
                    <Route path="/about" component={about} />
                    <Route path="/categories" component={categoriess} />
                    <Route path="/support" component={support} />
                    <Route path="/user/login" component={login} />
                    <Route path="/user/register" component={register} />
                    <Route path="/products/create" component={CreateProduct} />
                    <Route exact path='/products/view/:id' component={ViewProduct} />
                    <Route exact path='/users/:id' component={ViewUser} />
                    <Route exact path='/products' component={AllProducts} />
                </Switch>
                <Footer />
            </BrowserRouter>
        </Provider>
    );
}

export default App;