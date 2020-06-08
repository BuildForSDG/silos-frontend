import React, { Component } from 'react'
import PropTypes from 'prop-types' //ES6
import { Link, withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import logo from '../../images/logo.png';
import { createProduct, getCategories } from "../../actions/productActions"

import './products.scss'
import Loading from '../Loading';


class CreateProduct extends Component {
    constructor(props) {
        super(props)

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.onInputChange = this.onInputChange.bind(this)

        this.state = {
            productName: '',
            description: '',
            availableQuantity: '',
            image: '',
            categoryId: '',
            price: '',
            unit: '',
            categories: [],
            errors: {},
            loading: false
        }

    };

    async componentDidMount() {
        if (!this.props.auth.isAuthenticated) {
            this.props.history.push('/')
        }

        this.setState({ loading: true })
        const categories = await getCategories();
        this.setState({ loading: false, categories })
    }

    static getDerivedStateFromProps(props, state) {
        if (props.errors !== state.errors) {
            return {
                errors: props.errors,
                loading: false
            }
        }
        return null;
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    };

    onInputChange(e) {
        const image = e.target.files[0];
        if (image) {
            this.setState({ errors: {} })
            this.setState({ image })
        } else {
            this.setState({ errors: { image: 'Invalid Image' } })
        }
    }


    onSubmit(e) {
        e.preventDefault();
        this.setState({ loading: true })

        const data = {
            productName: this.state.productName,
            description: this.state.description,
            availableQuantity: this.state.availableQuantity,
            image: this.state.image,
            categoryId: this.state.categoryId,
            price: this.state.price,
            unit: this.state.unit,
        }

        this.props.createProduct(data, this.props.history)
    }

    render() {
        const { errors, loading, categories } = this.state
        return (
            <div className='create-product products' id="parent">
                <div className="row" id="rowdiv">
                    <div className="col-lg-12 col-md-12 reg-div" id="reg-div">
                        {loading && <Loading />}

                        <Link to="/" className="brand"><img src={logo} alt="silos-logo"></img></Link>
                        <form onSubmit={this.onSubmit}>
                            <div className="row">

                                <div className="form-group col-lg-6 col-md-6">
                                    <label >PRODUCT NAME:</label>
                                    <input name="productName" id="productName" type="text" value={this.state.productName} onChange={this.onChange} className="form-control" required />
                                    {errors.productName && <p className="text-danger text-lowercase" > {errors.productName}</p>}
                                </div>

                                <div className="form-group col-lg-6 col-md-6">
                                    <label >AVAILABLE QUANTITY:</label>
                                    <input name="availableQuantity" id="availableQuantity" type="text" value={this.state.availableQuantity} onChange={this.onChange} className="form-control" required />
                                    {errors.availableQuantity && <p className="text-danger text-lowercase" > {errors.availableQuantity}</p>}
                                </div>

                            </div>

                            <div className="row">

                                <div className="form-group col-lg-4 col-md-4">
                                    <label >PRICE:</label>
                                    <input name="price" id="price" type="text" value={this.state.price} onChange={this.onChange} className="form-control" required />
                                    {errors.price && <p className="text-danger text-lowercase" > {errors.price}</p>}
                                </div>

                                <div className="form-group col-lg-4 col-md-4">
                                    <label >UNIT:</label>
                                    <input name="unit" id="unit" type="text" value={this.state.unit} onChange={this.onChange} className="form-control" required />
                                    {errors.unit && <p className="text-danger text-lowercase" > {errors.unit}</p>}
                                </div>

                                <div className="form-group col-lg-4 col-md-4">
                                    <label>PRODUCT CATEGORY:</label>
                                    <select className="form-control" id="categoryId" name="categoryId" selected={this.state.categoryId} onChange={this.onChange} required>
                                        <option value=""></option>
                                        {categories.map(category =>
                                            <option key={category.id} value={category.id}>{category.name}</option>
                                        )}
                                    </select>
                                    {errors.categoryId && <p className="text-danger text-lowercase" > {errors.categoryId}</p>}
                                </div>
                            </div>

                            <div className="row">
                                <div className="form-group col-lg-12 col-md-12">
                                    <label>PICTURE:</label>
                                    <input id="image" type="file" accept="image/gif, image/jpeg, image/png" onChange={this.onInputChange} className="form-control" required />
                                </div>
                            </div>

                            <div className="row">
                                <div className="form-group col-lg-12 col-md-12">
                                    <label>PRODUCT DESCRIPTION:</label>
                                    <textarea
                                        className="form-control"
                                        placeholder="Product Description"
                                        name="description"
                                        value={this.state.description}
                                        onChange={this.onChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="d-flex justify-content-center">
                                <button className="submit submit-btn" type="submit" disabled={this.state.loading} >CREATE</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        )
    }
}

CreateProduct.propTypes = {
    createProduct: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};
const mapStateToprops = state => ({
    auth: state.auth,
    errors: state.errors
})
export default connect(mapStateToprops, { createProduct })(withRouter(CreateProduct))