import React, { Component } from 'react'
import PropTypes from 'prop-types' //ES6
import Loading from "../Loading";
import { getUserProducts } from '../../actions/userActions';
import { Link } from "react-router-dom";


import './users.scss'

class UsersProductsSidebar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [],
            loading: false
        }
    }

    async componentDidMount() {
        const { userId } = this.props
        this.setState({ loading: true })
        let products = await getUserProducts(userId);
        if (products) {
            products = products.slice(0, 6)
            this.setState({ loading: false, products })
        } else {
            this.setState({ loading: false })
        }
    }

    render() {
        const { loading, products } = this.state
        return (
            <div className='Users-Products-Sidebar users'>
                {loading && <Loading />}
                <div className="row">
                    {products.map(product => <div className="col-sm-6" key={product.id}>
                        <div className="card p-2" style={{ 'width': '15rem', "minHeight": "50px" }}>
                            <img src={product.image} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h6 className="card-title text-center">{product.productName}</h6>
                                <div className="d-flex justify-content-center">
                                    <Link className="btn btn-silos text-center" to={"/products/view/" + product.id}>View</Link>
                                </div>
                            </div>
                        </div>
                    </div>)}
                </div>
            </div>
        )
    }
}

UsersProductsSidebar.propTypes = {
    userId: PropTypes.number.isRequired
};

export default UsersProductsSidebar