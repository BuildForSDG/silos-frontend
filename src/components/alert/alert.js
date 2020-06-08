import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'



class Alert extends Component {
    constructor(props) {
        super(props)
        this.state = {
            notification: {
                status: "",
                message: ""
            }
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.notification) {
            this.setState({ notification: nextProps.notification });
            setInterval( () => { this.setState({ notification: { status: "", message: "" } }) }, 7000);
        }
    }

    render() {
        const { message, status } = this.state.notification;
        let mainClass
        if (status === "success") {
            mainClass = "text-primary ml-5"
        } else if (status === "failed") {
            mainClass = "text-danger ml-5"
        }
        return (
            <section className="m-0 p-0">
                <div className={mainClass} role="alert">
                    {message}
                </div>
            </section>
        )
    }
}

Alert.propTypes = {
    notification: PropTypes.object.isRequired
};
const mapStateToprops = state => ({
    notification: state.notification
})
export default connect(mapStateToprops)(Alert)