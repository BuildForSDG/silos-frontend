import axios from 'axios'
import setAuthToken from '../utils/setAuthToken'
import jwt_decode from 'jwt-decode'

import { GET_ERRORS, SET_CURRENT_USER, URL, NOTIFICATION } from './types'

export const registerUser = (userData, history) => dispatch => {
    axios
        .post(`${URL}/auth/register`, userData)
        .then(res => {
            dispatch({
                type: NOTIFICATION,
                payload: { status: "success", message: "Registration Successful" }
            })
            history.push('/user/login')
        })
        .catch(err => {
            // console.log(err.response.data.errors)
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data.errors
            })

            dispatch({
                type: NOTIFICATION,
                payload: { status: "failed", message: err.response.data.errors.message }
            })
        })
}

export const loginUser = (userData, history ) => dispatch => {
    axios
        .post(`${URL}/auth/signin`, userData)
        .then(res => {
            const { token, message } = res.data.data

            dispatch({
                type: NOTIFICATION,
                payload: { status: "success", message }
            })

            //save the token in local storage
            localStorage.setItem('jwtToken', token)

            //set the axios authorization token
            setAuthToken(token)

            //decode the jwt token
            const decoded = jwt_decode(token)

            //set current user
            dispatch(setCurrentUser(decoded))

            history.push('/')
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })

            dispatch({
                type: NOTIFICATION,
                payload: { status: "failed", message: err.response.data.errors.message }
            })
        })
}

export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
}

//log out user action
export const logoutUser = () => dispatch => {
    //remove the toke from localstorage
    localStorage.removeItem('jwtToken')

    //remove auth header
    setAuthToken(false)

    //set current user to empty object
    dispatch(setCurrentUser({}))
    // dispatch(clearCurrentprofile())
}
