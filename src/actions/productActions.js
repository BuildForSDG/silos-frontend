import axios from 'axios'

import { GET_ERRORS, URL, NOTIFICATION } from './types'

export const createProduct = (form, history) => dispatch => {
    const formData = new FormData()
    form.productName && formData.append('productName', form.productName);
    form.image && formData.append('image', form.image);
    form.availableQuantity && formData.append('availableQuantity', form.availableQuantity);
    form.description && formData.append('description', form.description);
    form.categoryId && formData.append('categoryId', form.categoryId);
    form.price && formData.append('price', form.price);
    form.unit && formData.append('unit', form.unit);

    const headers = {
        'Content-Type': 'multipart/form-data'
    }

    axios
        .post(`${URL}/products/create`, formData, headers)
        .then(res => {
            const { data } = res.data;
            dispatch({
                type: NOTIFICATION,
                payload: { status: "success", message: "Products Created Successfully" }
            })
            history.push(`/products/view/${data.productID}`)
        })
        .catch(err => {
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

export const getProduct = async (id) => {
    try {
        const res = await axios.get(`${URL}/products/${id}`)
        const { data } = res.data;
        return data
    } catch (error) {
        dispatchNotification (error.response.data.errors.message)
    }
}

export const getCategories = async () => {
    try {
        const res = await axios.get(`${URL}/categories`)
        const { data } = res.data;
        return data.categories
    } catch (error) {
        dispatchNotification (error.response.data.errors.message)
    }
}

export const getProducts = async (page) => {
    try {
        const res = await axios.get(`${URL}/products?page=${page}`)
        const { data } = res.data;
        return data
    } catch (error) {
       dispatchNotification (error.response.data.errors.message)
    }
}

export const dispatchNotification = message => dispatch => {
    dispatch({
        type: NOTIFICATION,
        payload: { status: "failed", message }
    })
}