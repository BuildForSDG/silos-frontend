import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './products.scss'
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
            productId: "",
            loading: false
        }
    }

    async componentDidMount() {
        const productId = this.props.match.params.id;
        this.setState({ loading: true, productId })
        const product = await getProduct(productId);
        if (product) {
            this.setState({ loading: false, product })
        } else {
            this.setState({ loading: false })
        }
    }

    async componentDidUpdate() {
        if (this.props.match.params.id !== this.state.productId) {
            const productId = this.props.match.params.id;
            this.setState({ loading: true, productId })
            const product = await getProduct(productId);
            if (product) {
                this.setState({ loading: false, product })
            } else {
                this.setState({ loading: false })
            }
        }
    }

    render() {
        const { loading, product } = this.state;
        return (
            <div className="view-product products">
                {loading && <Loading />}

                <div className="card pt-5" style={{ "width": "100%" }}>
                    <div className="row d-flex justify-content-center" style={{ "width": "100%" }}>
                        <div className="col-md-8">

                            <h3 className="card-title text-center pt-2 heading">{product.productName}</h3>
                            <div className="image">
                                <img src={product.image} className="card-img rounded img-thumbnail pt-5" alt={product.productName} />
                            </div>

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