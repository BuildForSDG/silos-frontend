import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './products.css'
import Loading from '../Loading';
import { getProduct } from "../../actions/productActions";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import UsersProductsSidebar from "../users/usersProductsSidebar"

class ViewProduct extends Component {
    constructor(props) {
        super(props)
        this.state = {
            product: {},
            loading: false
        }
    }

    async componentDidMount() {
        this.setState({ loading: true })
        const product = await getProduct(this.props.match.params.id);
        if (product) {
            this.setState({ loading: false, product })
        } else {
            this.setState({ loading: false })
        }
    }

    render() {
        const { loading, product } = this.state;
        return (
            <div className="view-product">
                {loading && <Loading />}

                <div className="card pt-5" style={{ "width": "100%" }}>
                    <h3 className="card-title pt-2 text-center heading">{product.productName}</h3>
                    <div className="row d-flex justify-content-center" style={{ "width": "100%" }}>
                        <div className="col-md-4">
                            <img src={product.image} className="card-img rounded img-thumbnail pt-5" alt={product.productName} />
                        </div>
                        <div className="col-md-4 pt-3">
                            <div className="card-body">
                                <h5 className="card-title heading">{product.productName}</h5>
                                {product.availableQuantity && <p className="card-text">Quantity Available {product.availableQuantity}</p>}
                                {product.price && <p className="card-text">Amount: N{product.price} per {product.unit} Units </p>}
                                <p className="card-text">{product.description}</p>
                                <p className="card-text"><small className="text-muted"> <Link to={"/users/" + product.userId} className="card-link">View Producer</Link></small> |
                                    <small className="text-muted"> <Link to={"/users/" + product.userId} className="card-link">Call to Order</Link></small></p>
                            </div>
                        </div>
                        <div className="col-md-4 pt-3">
                            <h5 className="heading text-center">More from this Producer</h5>
                            {product.userId && <UsersProductsSidebar userId={product.userId} />}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

ViewProduct.propTypes = {
    auth: PropTypes.object.isRequired
};
const mapStateToprops = state => ({
    auth: state.auth
})

export default connect(mapStateToprops)(ViewProduct)