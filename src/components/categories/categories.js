import React, { Component } from 'react'
import PropTypes from 'prop-types' //ES6
import Loading from '../Loading';
import { getCategories } from "../../actions/productActions";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";



import './categories.css'


class categories extends Component {
    constructor(props){
        super(props) 
        this.state = {
            category: {},
            loading: false

        
        }
    }

    async componentDidMount() {
        this.setState({ loading: true })
        const category = await getCategories(this.props.match.params);
        if (category) {
            this.setState({ loading: false, category })
        } else {
            this.setState({ loading: false })
        }
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