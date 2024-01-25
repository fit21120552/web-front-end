import { api } from '../../constants/api'
import axios from "axios"

export const listOrderDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: ORDER_DETAILS_REQUEST})

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

        const { data} = axios.get(`${api.getOrder}${id}`)

        dispatch({type: ORDER_DETAILS_SUCCESS, payload: data})
    } catch (error) {
        const message = error.response && error.response.data.message ? 
                        error.response.data.message : 
                        error.message
        
        if (message ==="Token failed") {
          //  dispatch(logout())
        }
        dispatch({
            type: ORDER_DETAILS_FAIL,
            payload: message
                
        })
    }
}

export const listOrders = () =>  async (dispatch, getState) => {
    try {
        dispatch({type: ORDER_LIST_REQUEST});

        const { userLogin: { userInfo }, } = getState()

        console.log("userInfo: ", userInfo)
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
                
            }
        }

        const { data } = await axios.get(api.getOrder, config)

       console.log("data: ",data )
        dispatch({type: ORDER_LIST_SUCCESS, payload: data.data.data })
    }  catch (error) {
        dispatch({
            type: ORDER_LIST_FAIL,
            payload:
                error.response && error.response.data.message ? 
                    error.response.data.message : 
                    error.message,
        })
    }
}

export const deleteOrder =  (id)=>  async (dispatch, getState) => {
    try {
        dispatch({type: ORDER_DELETE_REQUEST })

        const { 
            userLogin: { userInfo}, 
        } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
                "Access-Control-Allow-Origin": "*",
                "Content-Type":"application/json",
            }
        }
        const body = {
            sessionId: userInfo.sessionId
        }

       // console.log("delete cat id: ", id)
        const { data } = await axios.delete(api.getOrder+id, body, config)

        console.log("data del: ", data)
        dispatch({ type: ORDER_DELETE_SUCCESS})


    } catch (error) {
        const message = error.response && error.response.data.message ? 
                        error.response.data.message : 
                        error.message
        
        if (message ==="Token failed") {
          //  dispatch(logout())
        }
        dispatch({
            type: ORDER_DELETE_FAIL,
            payload: message
                
        })
    }
}