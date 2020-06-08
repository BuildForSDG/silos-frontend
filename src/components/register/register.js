import React, { Component } from 'react'
import PropTypes from 'prop-types' //ES6
import { Link, withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import logo from '../../images/logo.png';
import pics from '../../images/silos-image.png';
import { registerUser } from "../../actions/authActions"

import './register.scss'
// import SuccessAlert from '../alert/successAlert';
// import ErrorAlert from '../alert/errorAlert';
import Loading from '../Loading';


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
            userType: '',
            businessName: '',
            address: '',
            errors: {},
            loading: false
        }

    };

    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push('/')
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors, loading: false })
        }
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    };


    onSubmit(e) {
        e.preventDefault();
        this.setState({ errors: {} })

        if (this.state.password !== this.state.confirmPassword) {
            this.setState({ errors: { password: "password does not match " } })
            return
        }

        this.setState({ loading: true })

        const user = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            phoneNumber: this.state.phoneNumber,
            password: this.state.password,
            businessName: this.state.businessName,
            address: this.state.address,
            userType: this.state.userType
        }

        this.props.registerUser(user, this.props.history)
    }

    render() {
        const { errors, loading } = this.state
        return (
            <div className='register'>
                <div className="row" id="rowdiv">
                    <div className="col-lg-6 col-md-12 reg-div" id="reg-div">
                        {loading && <Loading />}

                        <Link to="/" className="brand"><img src={logo} alt="silos-logo"></img></Link>
                        <form onSubmit={this.onSubmit}>
                            <div className="row pr-0 pl-0">

                                <div className="form-group col-lg-6 col-md-6">
                                    <label >FIRST NAME:</label>
                                    <input name="firstName" id="firstName" type="text" value={this.state.firstName} onChange={this.onChange} className="form-control" required />
                                    {errors.firstName && <p className="text-danger text-lowercase" > {errors.firstName}</p>}
                                </div>

                                <div className="form-group col-lg-6 col-md-6">
                                    <label >LAST NAME:</label>
                                    <input name="lastName" id="lastName" type="text" value={this.state.lastName} onChange={this.onChange} className="form-control" required />
                                    {errors.lastName && <p className="text-danger text-lowercase" > {errors.lastName}</p>}
                                </div>

                            </div>
                            <div className="row pr-0 pl-0">
                                <div className="form-group col-lg-12 col-lg-6">
                                    <label >EMAIL:</label>
                                    <input name="email" id="email" type="text" value={this.state.email} onChange={this.onChange} className="form-control" required />
                                    {errors.email && <p className="text-danger text-lowercase" > {errors.email}</p>}
                                </div>
                            </div>

                            <div className="row pr-0 pl-0">
                                <div className="form-group col-lg-6 col-md-6">
                                    <label >PHONE NUMBER:</label>
                                    <input name="phoneNumber" id="phoneNumber" type="phone" value={this.state.phoneNumber} onChange={this.onChange} className="form-control" required />
                                    {errors.phoneNumber && <p className="text-danger text-lowercase" > {errors.phoneNumber}</p>}
                                </div>
                                <div className=" form-group col-md-6 col-lg-6">
                                    <label >BUSINESS NAME:</label>
                                    <input name="businessName" id="businessName" type="phone" value={this.state.businessName} onChange={this.onChange} className="form-control" required />
                                    {errors.businessName && <p className="text-danger text-lowercase" > {errors.businessName}</p>}
                                </div>
                            </div>

                            <div className="row pr-0 pl-0">
                                <div className="form-group col-lg-12 col-md-12">
                                    <label>PASSWORD:</label>
                                    <input name="password" id="password" type="password" value={this.state.password} onChange={this.onChange} className="form-control" required />
                                    {errors.password && <p className="text-danger text-lowercase" > {errors.password}</p>}
                                </div>
                            </div>

                            <div className="row pr-0 pl-0">
                                <div className="form-group col-lg-12 col-md-12">
                                    <label>CONFIRM PASSWORD:</label>
                                    <input name="confirmPassword" id="confirmPassword" type="password" value={this.state.confirmPassword} onChange={this.onChange} className="form-control" required />
                                </div>
                            </div>

                            <div className="row pr-0 pl-0">
                                <div className="form-group col-lg-12 col-md-12">
                                    <label>ADDRESS:</label>
                                    <input name="address" id="address" type="text" value={this.state.address} onChange={this.onChange} className="form-control" required />
                                    {errors.address && <p className="text-danger text-lowercase" > {errors.address}</p>}
                                </div>
                            </div>

                            <div className="row pr-0 pl-0">
                                <div className="form-group col-lg-12 col-md-12">
                                    <label>USERTYPE:</label>
                                    <select className="form-control" id="userType" name="userType" selected={this.state.userType} onChange={this.onChange} required>
                                        <option value=""></option>
                                        <option value="producer">Producer</option>
                                        <option value="financial-institution">Financial Institution</option>
                                        <option value="retailer">Retailer</option>
                                    </select>
                                    {errors.userType && <p className="text-danger text-lowercase" > {errors.userType}</p>}
                                </div>
                            </div>


                            <button className="submit col-lg-12" type="submit" disabled={this.state.loading} >REGISTER</button>
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
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};
const mapStateToprops = state => ({
    auth: state.auth,
    errors: state.errors
})
export default connect(mapStateToprops, { registerUser })(withRouter(register))