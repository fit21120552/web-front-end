import { api } from '../../constants/api'
import axios from "axios"
import { REVIEW_CREATE_FAIL, REVIEW_CREATE_REQUEST, REVIEW_CREATE_SUCCESS, REVIEW_PRODUCT_LIST_FAIL, REVIEW_PRODUCT_LIST_REQUEST, REVIEW_PRODUCT_LIST_SUCCESS } from '../Constants/ReviewConstants'

//LIST REVIEW PRODUCT
export const listReviewProduct = (productId) => async (dispatch) => {
    try {
        dispatch({type: REVIEW_PRODUCT_LIST_REQUEST})

        
        const { data } = await axios.get(`${api.getReviewOfAProduct}${productId}/reviews`)

        dispatch({type: REVIEW_PRODUCT_LIST_SUCCESS, payload: data })

    }  catch (error) {
        const message = error.response && error.response.data.message ? 
                        error.response.data.message : 
                        error.message
        
        if (message ==="Token failed") {
          //  dispatch(logout())
        }
        dispatch({
            type: REVIEW_PRODUCT_LIST_FAIL,
            payload: message
                
        })
    }
}

// CREATE REVIEW 
export const createReview = (productId, rating, review) => async (dispatch, getState) => {
    try {
        dispatch({type: REVIEW_CREATE_REQUEST})

        const { 
            userLogin: { userInfo }, 
        } = getState()

        const body =  {
            user: userInfo._id,
            rating: rating,
            review: review, 
            product: productId,
        }

        const { data } = await axios.post(`${api.createReviewOfAProduct}`, body)

        dispatch({type: REVIEW_CREATE_SUCCESS, payload: data })

    }  catch (error) {
        const message = error.response && error.response.data.message ? 
                        error.response.data.message : 
                        error.message
        
        if (message ==="Token failed") {
          //  dispatch(logout())
        }
        dispatch({
            type: REVIEW_CREATE_FAIL,
            payload: message
                
        })
    }
} 