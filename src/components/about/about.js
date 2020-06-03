import React, { Component } from 'react'
import PropTypes from 'prop-types' //ES6


import './about.css'

class about extends Component {
    constructor(props){
        super(props) 
        this.state = {
        
        }
    }

    render(){
        return (
            <div className='component-about'>
                <h1>about</h1>
            </div>
        )
    }
}

about.propTypes = {

};

export default about