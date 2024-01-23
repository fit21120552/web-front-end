import { api } from '../../constants/api'
import axios from "axios"
import { CATEGORY_DETAILS_REQUEST, CATEGORY_DETAILS_SUCCESS, CATEGORY_DETAILS_FAIL } from '../Constants/CategoryConstants'

export const listCategoryDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: CATEGORY_DETAILS_REQUEST})

        const { 
            userLogin: { userInfo}, 
        } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
                "Access-Control-Allow-Origin": "*",
                "Content-Type":"application/json",
            },
            withCredentials: true,
        }

        const { data} = axios.get(api.getCategory)

        dispatch({type: CATEGORY_DETAILS_SUCCESS, payload: data})
    } catch (error) {
        const message = error.response && error.response.data.message ? 
                        error.response.data.message : 
                        error.message
        
        if (message ==="Token failed") {
          //  dispatch(logout())
        }
        dispatch({
            type: CATEGORY_DETAILS_FAIL,
            payload: message
                
        })
    }
}