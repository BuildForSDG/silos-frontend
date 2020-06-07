import React, { Component } from 'react'
import PropTypes from 'prop-types' //ES6
import Loading from '../Loading';
import { getUser } from "../../actions/userActions";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import blankImage from "../../images/blank-user.gif";
import UsersProductsSidebar from "./usersProductsSidebar"


import './users.scss'

class ViewUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {},
            loading: false
        }
    }

    async componentDidMount() {
        this.setState({ loading: true })
        const user = await getUser(this.props.match.params.id);
        if (user) {
            this.setState({ loading: false, user })
        } else {
            this.setState({ loading: false })
        }
    }

    render() {
        const { loading, user } = this.state;
        const userImage = user.photo ? user.photo : blankImage;

        return (
            <div className="view-user users">
                {loading && <Loading />}
                <div className="card pt-5" style={{ "width": "100%" }}>
                    { user.firstName && <h3 className="card-title pt-2 text-center heading">{user.firstName}'s Profile</h3>}
                    <div className="row d-flex justify-content-center" style={{ "width": "100%" }}>
                        <div className="col-md-4">
                            <img src={userImage} className="card-img rounded img-thumbnail pt-5" alt={user.firstName} />
                        </div>
                        <div className="col-md-4 pt-5">
                            <div className="card-body">
                                <h5 className="card-title heading">{user.firstName} {user.lastName}</h5>
                                {user.email && <p className="card-text">Email {user.email}</p>}
                                {user.phoneNumber && <p className="card-text">Phone Number: {user.phoneNumber} </p>}
                                {user.businessName && <p className="card-text">Organization: {user.businessName} </p>}
                                <p className="card-text">{user.bio}</p>
                                {user.userType === "producer" && <p className="card-text"><small className="text-muted">
                                    <Link to={"/users/" + user.userId + "/products"} className="card-link">View Products</Link></small> </p>}
                            </div>
                        </div>
                        <div className="col-md-4 pt-3">
                            {user.userType === "producer" && <div>
                                <h5 className="heading text-center">Users Products</h5>
                                    <UsersProductsSidebar userId={user.id} />
                                </div>}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToprops = state => ({
    auth: state.auth
})

ViewUser.propTypes = {
    auth: PropTypes.object.isRequired
};

export default connect(mapStateToprops)(ViewUser)