import React, { Component } from 'react'
// import PropTypes from 'prop-types' //ES6


import './users.css'

class ViewUser extends Component {
    constructor(props){
        super(props) 
        this.state = {
        
        }
    }

    render(){
        return (
            <div className='view-user'>
                <h1>User Name</h1>
            </div>
        )
    }
}

ViewUser.propTypes = {

};

export default ViewUser