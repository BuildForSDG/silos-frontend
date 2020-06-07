import React, { Component } from 'react'
import { Link } from "react-router-dom";
import PropTypes from 'prop-types' //ES6
import logo from '../../images/logo.png';
import { logoutUser } from "../../actions/authActions";
import { connect } from 'react-redux';
import './navbar.scss'

class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    onLogoutClick(e) {
        e.preventDefault()
        this.props.logoutUser()
    }

    render() {
        const { isAuthenticated, user } = this.props.auth

        let authLinks

        if (isAuthenticated) {
            authLinks = (
                <ul className="navbar-nav nav-item-right">
                    <li className="nav-item">
                        <Link to={"/users/" + user.id} className="nav-link">{user.email}</Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/products/create" className="nav-link">Create Product</Link>
                    </li>

                    <li
                        onClick={this.onLogoutClick.bind(this)}
                        className='nav-link'
                        style={{ cursor: 'pointer' }}
                    >
                        Log Out
					</li>
                </ul>)
        } else {
            authLinks = (
                <ul className="navbar-nav nav-item-right">
                    <li className="nav-item">
                        <Link to="/user/login" className="nav-link" id="login">log in</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/user/register" className="nav-link" id="register">Register</Link>
                    </li>
                </ul>)
        }

        return (
            <nav className=" navbar navbar-expand-lg navbar-light">
                <Link to="/" className="navbar-brand"><img src={logo} alt="silos-logo"></img></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link to="/products" className="nav-link" >Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">About</Link>
                        </li>

                        {authLinks}
                    </ul>
                </div>
            </nav>
        );
    }
}

Navbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
})
export default connect(mapStateToProps, { logoutUser })(Navbar)