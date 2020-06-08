import React, { Component } from 'react'
import PropTypes from 'prop-types' //ES6


import './home.css'

class home extends Component {
    constructor(props){
        super(props) 
        this.state = {
        
        }
    }

    render(){
        return (
            <div className='component-home'>
                <h1>home</h1>
            </div>
        )
    }
}

home.propTypes = {

};

export default home