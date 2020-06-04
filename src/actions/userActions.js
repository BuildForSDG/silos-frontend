import axios from 'axios'

import { URL, NOTIFICATION } from './types'

export const getUser = async (id) => {
    try {
        const res = await axios.get(`${URL}/users/${id}`)
        const { data } = res.data;
        console.log(data)
        return data.user
    } catch (error) {
        dispatch({
            type: NOTIFICATION,
            payload: { status: "failed", message: error.response.data.errors.message }
        })
    }
}