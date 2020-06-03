import React, { Component } from 'react'
import { Link } from "react-router-dom";
import PropTypes from 'prop-types' //ES6
import logo from '../../images/logo.png';



import './navbar.css'

class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {

        return (
            <nav  className=" navbar navbar-expand-lg navbar-light">
                <Link to="/" className="navbar-brand"><img src={logo} alt="silos-logo"></img></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link" >Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/categories" className="nav-link">Categories</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/support" className="nav-link">Support</Link>
                        </li>

                        <ul className="navbar-nav nav-item-right">
                            <li className="nav-item">
                                <Link to="/user/login" className="nav-link" id="login">log in</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/user/register" className="nav-link" id="register">Register</Link>
                            </li>

                        </ul>


                    </ul>
                </div>
            </nav>
        );
    }
}

Navbar.propTypes = {

};

export default Navbar