import React, { Component } from 'react'
import PropTypes from 'prop-types' //ES6


import './categoriess.css'
import Loading from '../Loading';


class categoriess extends Component {
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

categoriess.propTypes = {

};

export default categoriess