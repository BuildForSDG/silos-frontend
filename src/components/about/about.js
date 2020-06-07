import React, { Component } from 'react'
import aboutImage from '../../images/home-cover.png';



import './about.scss'

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
                        <div className="row">
                            <div className="col-md-6">
                                <img src={aboutImage} alt="about-image" className="rounded img-thumbnail"></img>
                            </div>
                            <div className="col-md-6 pt-3">
                                <div className="pt-2">
                                    <h1 class="text-center" id="about-text">About Silos</h1>
                                    <p class="text-center">Silos is an online ecommerce platform for farmers to sell their products online, Here on silos, you can purchase fresh,
                                natural farm produce directly from farmers near you and across the world at affordable prices and have then delivered to your door step</p>
                                </div>

                                <div class="mission pt-3">
                                    <h1 class="text-center" id="ourmission">Our mission</h1>
                                    <p class="text-center">At Silos, our mission is to help farmer get access to thousands of buyers by showcasing their products online on silos.</p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default about