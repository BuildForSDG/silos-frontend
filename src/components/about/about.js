import React, { Component } from 'react'
import PropTypes from 'prop-types' //ES6
import aboutImage from '../../images/home-cover.png';



import './about.css'

class about extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className='component-about'>
                <div class="container">
                    <div class="about">
                        <img src={aboutImage} alt="about-image" className="about-us-image"></img>
                        <h5 class="text-center">Silos is an online ecommerce platform for farmers to sell their products online, Here on silos, you can purchase fresh, natural farm produce directly from farmers near you and across the world at affordable prices and have then delivered to your door step</h5>
                         
                        <div class="mission">
                            <h1 class="text-center" id="ourmission">Our mission</h1>
                            <h4 class="text-center">At Silos, our mission is to help farmer get access to thousands of buyers by showcasing their products online on silos.</h4>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

about.propTypes = {

};

export default about