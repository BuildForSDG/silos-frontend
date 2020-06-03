import React, { Component } from 'react'
import PropTypes from 'prop-types' //ES6



class ErrorAlert extends Component {
    constructor(props){
        super(props) 
        this.state = {
        
        }
    }

    render(){
        return (
            <div className="alert alert-danger" role="alert">
            You have registered successfully
           </div>

        )
    }
}

ErrorAlert.propTypes = {

};

export default ErrorAlert