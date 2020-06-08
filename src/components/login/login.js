import React, { Component } from 'react'
import PropTypes from 'prop-types' //ES6
import { Link, withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import logo from '../../images/logo.png';
import pics from '../../images/silos-image.png';
import { loginUser } from "../../actions/authActions"

import './login.scss'
import Loading from '../Loading';


class Login extends Component {
    constructor(props) {
        super(props)

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            email: '',
            password: '',
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
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push('/dashboard')
        }
        if (nextProps) {
            this.setState({ errors: nextProps.errors, loading: false })
        }
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    };


    onSubmit(e) {
        e.preventDefault();
        this.setState({ errors: {}, loading: true })

        const user = {
            email: this.state.email,
            password: this.state.password,
        }

        this.props.loginUser(user, this.props.history)
    }

    render() {
        const { errors, loading } = this.state
        return (
            <div className='login' id="login">
                <div className="row" id="rowdiv">
                    <div className="col-md-6 reg-div" id="reg-div">
                        {loading && <Loading />}

                        <Link to="/" className="brand"><img src={logo} alt="silos-logo"></img></Link>
                        <form onSubmit={this.onSubmit}>

                            
                                <div className="form-group ">
                                    <label >EMAIL:</label>
                                    <input name="email" id="email" type="text" value={this.state.email} onChange={this.onChange} className="form-control" required />
                                    {errors.email && <p className="text-danger text-lowercase" > {errors.email}</p>}
                                </div>

                            
                                <div className="form-group">
                                    <label>PASSWORD:</label>
                                    <input name="password" id="password" type="password" value={this.state.password} onChange={this.onChange} className="form-control" required />
                                    {errors.password && <p className="text-danger text-lowercase" > {errors.password}</p>}
                                </div>

                            <div className="d-flex justify-content-center">
                                <button className="submit submit-btn btn" type="submit" disabled={this.state.loading} >LOGIN</button>
                            </div>
                            <p className="haveAccount"> Already have an account? <Link to="/user/login" className="haveAccountLink">Log in</Link></p>



                        </form>
                    </div>
                    <div className="col-md-6 reg-img" id="reg-img">
                        <img src={pics} alt="silos-image" className="reg-image"></img>
                    </div>
                </div>
            </div>


        )
    }
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};
const mapStateToprops = state => ({
    auth: state.auth,
    errors: state.errors
})
export default connect(mapStateToprops, { loginUser })(withRouter(Login))