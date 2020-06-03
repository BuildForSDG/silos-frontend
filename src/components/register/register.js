import React, { Component } from 'react'
import PropTypes from 'prop-types' //ES6
import { Link } from "react-router-dom";
import axios from 'axios';

import logo from '../../images/logo.png';
import pics from '../../images/silos-image.png';



import './register.css'
import SuccessAlert from '../alert/successAlert';
import ErrorAlert from '../alert/errorAlert';


class register extends Component {
    constructor(props) {
        super(props)

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            password: '',
            confirmPassword: '',
            firstNameError: '',
            lastNameError: '',
            emailError: '',
            phoneNumberError: '',
            passwordError: '',
            alertMessage: ''


        }

    };



    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    };


    /**    validate() {
           let isError = false;
           const errors = {
               firstNameError: '',
               lastNameError: '',
               emailError: '',
               phoneNumberError: '',
               passwordError: '',
               confirmPasswordError: ''
   
           };
   
           if (this.state.firstName.length < 1) {
               isError = true;
               errors.state.firstNameError = " Invalid First Name "
           }
   
           if (this.state.lastName.length < 1) {
               isError = true;
               errors.state.lastNameError = " Invalid first Name "
           }
   
           if (!this.state.email.indexOf("@") === -1) {
               isError = true;
               errors.state.emailError = "Requires a valid email"
           }
           this.setState({
               ...this.state,
               ...errors
           });
   
           return isError;
   
   
       };
       */

    onSubmit(e) {
        e.preventDefault();
        const user = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            phoneNumber: this.state.phoneNumber,
            password: this.state.password


        }

        axios.post('http://silos-staging.herokuapp.com/api/vi/auth/register', user).then(res => {
            this.setState({ alertMessage: "success" })
        }).catch(error => {
            this.setState({ alertMessage: "error" })
        });


    }

    render() {
        return (
            <div className='register' id="parent">
                <div className="row" id="rowdiv">
                    <div className="col-lg-6 col-md-12 reg-div" id="reg-div">
                        {this.setState.alertMessage == "success" ? <SuccessAlert /> : null}
                        {this.setState.alertMessage == "error" ? <ErrorAlert /> : null}



                        <Link to="/" className="brand"><img src={logo} alt="silos-logo"></img></Link>
                        <form onSubmit={this.onSubmit}>
                            <div className="row">

                                <div className="form-group col-lg-6 col-md-6 col-sm-6">
                                    <label >FIRST NAME:</label>
                                    <input name="firstName" id="firstName" type="text" value={this.state.firstName} onChange={this.onChange} className="form-control" required />
                                </div>

                                <div className="form-group col-lg-6 col-md-6 col-sm-6">
                                    <label >LAST NAME:</label>
                                    <input name="lastName" id="lastName" type="text" value={this.state.lastName} onChange={this.onChange} className="form-control" required />
                                </div>

                            </div>
                            <div className="row">
                                <div className="form-group col-lg-12">
                                    <label >EMAIL:</label>
                                    <input name="email" id="email" type="text" value={this.state.email} onChange={this.onChange} className="form-control" required />
                                </div>
                            </div>

                            <div className="row">
                                <div className="form-group col-lg-12">
                                    <label >PHONE NUMBER:</label>
                                    <input name="phoneNumber" id="phoneNumber" type="phone" value={this.state.phoneNumber} onChange={this.onChange} className="form-control" required />
                                </div>
                            </div>

                            <div className="row">
                                <div className="form-group col-lg-12">
                                    <label>PASSWORD:</label>
                                    <input name="password" id="password" type="password" value={this.state.password} onChange={this.onChange} className="form-control" required />
                                </div>
                            </div>

                            <div className="row">
                                <div className="form-group col-lg-12">
                                    <label>CONFIRM PASSWORD:</label>
                                    <input name="confirmPassword" id="confirmPassword" type="password" value={this.state.confirmPassword} onChange={this.onChange} className="form-control" required />
                                </div>
                            </div>

                            <button className="submit col-lg-12" type="submit">REGISTER</button>
                            <p className="haveAccount"> Already have an account? <Link to="/user/login" className="haveAccountLink">Log in</Link></p>



                        </form>
                    </div>
                    <div className="col-lg-6 reg-img" id="reg-img">
                        <img src={pics} alt="silos-image" className="reg-image"></img>
                    </div>
                </div>
            </div>


        )
    }
}

register.propTypes = {

};

export default register