import React, { Component } from 'react'
import PropTypes from 'prop-types' //ES6


import './login.css'

class login extends Component {
    constructor(props){
        super(props) 
        this.state = {
        
        }
    }

    render(){
        return (
            <div className='login'>
                <h1>login</h1>
            </div>
        )
    }
}

login.propTypes = {

};

export default login