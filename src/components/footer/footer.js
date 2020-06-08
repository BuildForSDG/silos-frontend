import React, { Component } from 'react'
import PropTypes from 'prop-types' //ES6
import { Link } from "react-router-dom";
import silos from '../../images/silos.png';
import logo from '../../images/logo.png';



import './footer.css'

class Footer extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className='component-footer'>
                <footer id="footer">
                    <div className="footer-top">
                        <div className="container1">
                            <div className="sell" style={{ backgroundColor: 'white', height: 'auto' }}>
                                <div className="row">
                                    <div className="col-lg-4">
                                        <h4>want to sell on silos?</h4>
                                        <h6> get access to thousands of of customer on silos <br /> expand your reach</h6>
                                    </div>
                                    <div className="image col-lg-4">
                                        <img src={silos}></img>
                                    </div>
                                    <div className="col-lg-4">
                                        <button className="startSelling" type="button" >Start Selling</button>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-4 col-md-6 footer-info">
                                    <h4>SILOS</h4>
                                    <p>We will boost your skills and profile,
                                        provide you with personalized career guidance and
                                        match you with the right opportunities,so that you can be the best and the brightest
                                     </p>
                                </div>
                                <div className="col-lg-3 col-md-6 footer-links">
                                    <h4>Categories</h4>
                                    <ul>
                                        <li><Link to="/">Poultry</Link></li>
                                        <li><Link to="/">Livestock</Link></li>
                                        <li><Link to="/">Vegetables</Link></li>
                                        <li><Link to="/">Farm input</Link></li>
                                        <li><Link to="/">Fishes and sea food</Link></li>
                                        <li><Link to="/">more Categories...</Link></li>

                                    </ul>
                                </div>
                                <div className="col-lg-3 col-md-6 footer-links">
                                    <h4>Quick Links</h4>
                                    <ul>
                                        <li><a href="#">About silos</a></li>
                                        <li><a href="#">Report a farmer</a></li>
                                        <li><a href="#">FAQs</a></li>
                                        <li><a href="#">Terms and Conditions</a></li>
                                        <li><a href="#">Login</a></li>
                                        <li><a href="#">register</a></li>

                                    </ul>
                                </div>
                                <div className="col-lg-2 col-md-6 footer-contact">
                                    <h4>Contact Us</h4>
                                    <h5>hello@silos.com</h5>
                                    <div className="social-links">
                                        <a href="#" className="twitter"><i className="fas fa-twitter"></i></a>
                                        <a href="#" className="facebook"><i className="fas fa-facebook"></i></a>
                                        <a href="#" className="instagram"><i className="fas fa-instagram"></i></a>
                                        <a href="#" className="linkedin"><i className="fas fa-linkedin"></i></a>

                                    </div>
                                </div>
                            </div>


                            <div className="copyright-container">
                                <div className="copyright">
                                    &copy; Copyright <strong>SILOS</strong>. All Rights Reserved 2020
                                         </div>
                            </div>

                        </div>

                    </div>

                </footer>
            </div>
        )
    }
}

Footer.propTypes = {

};

export default Footer