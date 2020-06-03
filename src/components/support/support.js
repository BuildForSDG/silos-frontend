import React, { Component } from 'react'
import PropTypes from 'prop-types' //ES6


import './support.css'

class support extends Component {
    constructor(props){
        super(props) 
        this.state = {
        
        }
    }

    render(){
        return (
            <div className='component-support'>
                <h1>support</h1>
            </div>
        )
    }
}

support.propTypes = {

};

export default support