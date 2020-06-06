import React, { Component } from 'react'
import PropTypes from 'prop-types' //ES6
import { Link, withRouter } from "react-router-dom";

import headerImage from '../../images/home-cover.png';
import about1 from '../../images/about1.png';
import about2 from '../../images/about2.png';
import about3 from '../../images/about3.png';
import about4 from '../../images/about4.png';


import './home.css'

class home extends Component {
    constructor(props) {
        super(props)

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            product: '',
            location: '',
            categories: []

        }
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit(e) {
        e.preventDefault();
        console.log(this.state);


    }


    render() {
        return (
            <div className='component-home'>
                <div className="header">
                    <div className="row">
                        <div className="left-header col-lg-6">
                            <h2 className="text"> Buy fresh, natural farm products <br /> directly from farmers near you</h2>
                            <p className="text">Here on silos, you can purchase fresh, natural farm produce <br /> directly from farmers near you and across the world</p>
                            <form className="searchForm" onSubmit={this.onSubmit}>
                                <div className="row" id="left">
                                    <div className="form-group col-lg-5 col-md-5 col-sm-12">
                                        <i className="fab fa-search icon"></i>
                                        <input name="product" id="product" type="text" value={this.state.product} onChange={this.onChange} placeholder="e.g yam, egg, cocoa..." className="form-control" required />
                                    </div>

                                    <div className="form-group col-lg-4 col-md-4 col-sm-12">
                                        <i className="fab fa-search icon"></i>
                                        <select className="form-control" id="location" name="location" selected={this.state.location} onChange={this.onChange} required>
                                            <option value=""></option>
                                            <option value="edo">Edo</option>
                                            <option value="lagos">Lagos</option>
                                            <option value="abuja">Abuja</option>
                                        </select>
                                    </div>
                                    <div className="button">
                                        <button className="search-button" type="submit">search</button>
                                    </div>
                                </div>
                            </form>
                            <p className="text">Are you a farmer? <Link to="/user/register" className="link">Start selling for free</Link></p>

                        </div>

                        <div className="header-image col-lg-5">
                            <img src={headerImage} alt="header-image" ></img>

                        </div>
                    </div>

                </div>

                <div className="categories">
                    <div className="container">
                        <h3>Categories</h3>
                    </div>

                    <div className="">

                        {categories.map(category => {
                            return (
                                <div> thumbnail</div>
                            )
                        })}
                    </div>
                </div>

                <div className="about">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <h6>About silos</h6>
                                <h3 className="about-text">Connecting farmers directly to customers</h3>
                                <p className="about-text">Here on silos, you can purchase fresh, natural farm produce directly from farmers near you and across the world at affordable prices and have then delivered to your door step, Here on silos, you can purchase fresh, natural farm produce directly from farmers near you and across the world at affordable prices and have then delivered to your door step.</p>
                                <Link to="/user/register" className="about-text" id="about-button">Start selling</Link>
                            </div>
                            <div className="col-lg-6">
                                <div className="images row">

                                    <div className="images-row1 col-lg-6 col-md-6 col-sm-6 col-xm-6" >
                                        <img src={about4} alt="about-image-4"></img>
                                        <img src={about2} alt="about-image-3"></img>
                                    </div>

                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xm-6">
                                        <img src={about3} alt="about-image-2"></img>
                                        <img src={about1} alt="about-image-1"></img>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="featured-products">
                    <div className="container">
                        <h6>Explore</h6>
                        <h3>Our featured products</h3>
                    </div>
                </div>
            </div>
        )
    }
}

home.propTypes = {

};

export default home