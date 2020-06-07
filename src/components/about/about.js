import React, { Component } from 'react'
import PropTypes from 'prop-types' //ES6


import './about.css'

class about extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className='about p-5'>
                <div className="pl-5">
                    <h3 className="text-secondary">About Silos</h3>
                    <p>
                        We will boost your skills and profile, provide you with personalized career <br></br>
                        guidance and match you with the right opportunities,so that you can be the best <br></br>
                        and the brightest
                    </p>
                </div>
            </div>
        )
    }
}

about.propTypes = {

};

export default about