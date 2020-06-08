import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './allProducts.scss'
import Loading from '../Loading';
import { getProducts } from "../../actions/productActions";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

class AllProducts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [],
            totalProducts: 0,
            page: 1,
            loading: false
        }

        this.fetchMore = this.fetchMore.bind(this)
    }

    async componentDidMount() {
        this.setState({ loading: true })
        const { products, totalProducts } = await getProducts(this.state.page);
        if (products) {
            this.setState({ loading: false, products, totalProducts })
        } else {
            this.setState({ loading: false })
        }
    }

    async fetchMore() {
        let { page } = this.state;
        page+=1;
        this.setState({ loading: true, page })
        const { products, totalProducts } = await getProducts(page);
        const newproducts = this.state.products.concat(products);
        if (products) {
            this.setState({ loading: false, products: newproducts, totalProducts })
        } else {
            this.setState({ loading: false })
        }
    }

    render() {
        const { products, totalProducts, loading } = this.state;
        return (
            <div className="all-product p-5" id="allProducts">
                {loading && <Loading />}
                <div className="search">
                    <div className="form-group form-row">
                        <div>
                            <h3 className="m-2 pb-5 text-secondary">
                                Buy Affordable Farm Products Directly from  <br></br>
                                Farers Near You
                            </h3>
                        </div>
                        <label className="sr-only">search</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" placeholder="Search Products" />
                        </div>
                        <div className="col-md-2">
                            <button type="submit" className="btn mb-2 btn-silos">search</button>
                        </div>
                    </div>
                </div>
                <div className="search-contents pt-5">
                    <div className="d-flex justify-content-between">
                        <div className="description text-secondary">
                            <strong>All Products</strong> <br></br>
                            {totalProducts} results
                        </div>
                    </div>
                    <div className="pt-5 row pr-0 pl-0">
                        {products.map(product => <div className="card col-md-3 col-sm-12 col-lg-3 mb-2" key={product.id} style={{ "width": "25rem" }}>
                            <img className="card-img-top" src={product.image} alt={product.productName} />
                            <div className="card-body">
                                <div className="row p-0">
                                    <div className="col-md-8">
                                        <h5 className="card-title">{product.productName}</h5>
                                        <p className="card-text">{(product.description).substring(0, 100)}</p>
                                    </div>

                                    <div className="col-md-4 pt-2">
                                        <strong>N {product.price}</strong><br></br>
                                    per {product.unit}
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex justify-content-center pt-3 bottom-button">
                                <Link className="btn btn-silos text-center" to={"/products/view/" + product.id}>View</Link>
                            </div>

                        </div>)}
                    </div>
                </div>

                {totalProducts > 50 && <div className="d-flex justify-content-center pt-5">
                    <button type="submit" className="btn mb-2 btn-silos" disabled={this.loading} onClick={this.fetchMore}>Load More</button>
                </div>}
            </div >
        )
    }
}

AllProducts.propTypes = {
    auth: PropTypes.object.isRequired
};
const mapStateToprops = state => ({
    auth: state.auth
})

export default connect(mapStateToprops)(AllProducts)