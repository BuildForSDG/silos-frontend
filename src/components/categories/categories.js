import React, { Component } from 'react'
import PropTypes from 'prop-types' //ES6


import './categories.css'
import Loading from '../Loading';


class categories extends Component {
    constructor(props){
        super(props) 
        this.state = {
        
        }
    }

   async componentDidMount() {
        const url = "silos-app.herokuapp.com/api/v1/categories"
    }

    render(){
        return (
            <div className='component-categoriess'>
                <h1>categoriess</h1>
            </div>
        )
    }
}

categories.propTypes = {

};

export default categories