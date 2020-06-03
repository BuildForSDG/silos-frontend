import React, { Component } from 'react'
import PropTypes from 'prop-types' //ES6



class SuccessAlert extends Component {
    constructor(props){
        super(props) 
        this.state = {
        
        }
    }

    render(){
        return (
            <div className="alert alert-success" role="alert">
             You have registered successfully
            </div>
        )
    }
}

SuccessAlert.propTypes = {

};

export default SuccessAlert