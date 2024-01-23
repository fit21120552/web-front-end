import { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS,
    PRODUCT_DETAILS_REQUEST,PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL
 } from "../Constants/ProductConstants"
import { api } from '../../constants/api'
import axios from "axios"

//PRODUCT LIST
export const listProduct = () => async(dispatch) => {
    try {
        dispatch({ type: PRODUCT_LIST_REQUEST}) 
        const { data } = await axios.get(api.getAndCreateProduct)
        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data});
        
    } catch (error) {
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload:
                error.response && error.response.data.message ? 
                    error.response.data.message : 
                    error.message,
        })
    }
}

//PRODUCT DETAILS
export const listProductDetails = (id) => async(dispatch) => {
    try {
        dispatch({ type: PRODUCT_DETAILS_REQUEST}) 
        const { data } = await axios.get(api.getAndCreateProduct+id)
        dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data});
        
    } catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload:
                error.response && error.response.data.message ? 
                    error.response.data.message : 
                    error.message,
        })
    }
}


//// ADMIN
 export const listProductsAdmin = () =>  async (dispatch, getState) => {
    try {
        dispatch({type: PRODUCT_LIST_REQUEST});

        const { userLogin: { userInfo}, } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.get(api.getAndCreateProduct, config)

        dispatch({type: PRODUCT_LIST_SUCCESS, payload: data})
    }  catch (error) {
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload:
                error.response && error.response.data.message ? 
                    error.response.data.message : 
                    error.message,
    })
}
 }