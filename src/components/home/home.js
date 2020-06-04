import React, { Component } from 'react'
import PropTypes from 'prop-types' //ES6

import headerImage from '../../images/home-cover.png';

import './home.css'

class home extends Component {
    constructor(props) {
        super(props)

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            product: '',
            location: ''

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
                        <div className="col-lg-6">
                            <h2 className="text-center"> Buy fresh, natural farm products <br /> directly from farmers near you</h2>
                            <p className="text-center">Here on silos, you can purchase fresh, natural farm produce directly from farmers near you and across the world</p>
                            <form className="searchForm" onSubmit={this.onSubmit}>
                                <div className="row" id="left">
                                    <div className="form-group col-lg-5 col-md-5 col-sm-12">
                                        <input name="product" id="product" type="text" value={this.state.product} onChange={this.onChange} placeholder="e.g yam, egg, cocoa..." className="form-control" required />
                                    </div>

                                    <div className="form-group col-lg-4 col-md-4 col-sm-6">
                                        <input name="location" id="location" type="text" value={this.state.location} onChange={this.onChange} className="form-control" required />
                                    </div>

                                    <button className="submit" type="submit">search</button>

                                </div>


                            </form>
                        </div>

                        <div className="header-image col-lg-5">
                            <img src={headerImage} alt="header-image" ></img>

                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

home.propTypes = {

};

export default home