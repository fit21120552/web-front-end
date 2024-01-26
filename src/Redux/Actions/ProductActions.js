import { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS,
    PRODUCT_DETAILS_REQUEST,PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL, 
    PRODUCT_DELETE_REQUEST, PRODUCT_DELETE_SUCCESS, PRODUCT_DELETE_FAIL, 
    PRODUCT_CREATE_REQUEST, PRODUCT_CREATE_FAIL, PRODUCT_CREATE_SUCCESS, PRODUCT_EDIT_FAIL, PRODUCT_EDIT_SUCCESS, PRODUCT_EDIT_REQUEST
 } from "../Constants/ProductConstants"
import { api } from '../../constants/api'
import axios from "axios"
import { connect } from "react-redux"

//PRODUCT LIST
export const listProduct = () => async(dispatch) => {
    try {
        dispatch({ type: PRODUCT_LIST_REQUEST}) 
        const { data } = await axios.get(api.getAndCreateProduct)
      //  console.log("list product:", data)
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
        //console.log("data:" , data.data.data)
        dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data.data.data});
        
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

        const { userLogin: { userInfo }, } = getState()

       // console.log("userInfo: ", userInfo)
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.sessionId}`
            }
        }

        const { data } = await axios.get(api.getAndCreateProduct, config)

         console.log("data: ",data )
        dispatch({type: PRODUCT_LIST_SUCCESS, payload: data.data.data })
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

//DELETE PRODUCT
export const deleteProduct = (id) =>  async (dispatch, getState) => {
    try {
        dispatch({type: PRODUCT_DELETE_REQUEST});

        const { 
            userLogin: { userInfo}, 
        } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.sessionId}`,
                "Access-Control-Allow-Origin": "*",
                "Content-Type":"application/json",
                sessionId: userInfo.sessionId,
            },
            
        }
        
        const body = {
            sessionId: userInfo.sessionId
        }
       // console.log("body: ", body)

        console.log(`del ${api.deleteProduct+id}`)

         const { data } = await axios.delete(api.deleteProduct+id, body, config)
         
         
        console.log("data: ",data )
        dispatch({type: PRODUCT_DELETE_SUCCESS})
    }  catch (error) {
        const message = error.response && error.response.data.message ? 
                        error.response.data.message : 
                        error.message
        
        if (message ==="Token failed") {
          //  dispatch(logout())
        }
        dispatch({
            type: PRODUCT_DELETE_FAIL,
            payload: message
                
        })
    }
}

//CREATE PRODUCT
export const createProduct = (title, price, stock, description, category, thumbnail) =>  async (dispatch, getState) => {
    try {
        dispatch({type: PRODUCT_CREATE_REQUEST});

        const { 
            userLogin: { userInfo}, 
        } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
                "Access-Control-Allow-Origin": "*"
            },
            withCredentials: true,
        }
        console.log("cate:", category)
         const body = {
            title: title,
             price: price, 
             stock: stock, 
             description: description, 
             category: category, 
             thumbnail: thumbnail,
             sessionId: userInfo.sessionId,
             brand: "fix in product actions in redux"
         }
        const { data} = await axios.post(`${api.createProduct}`,
                                            body,
                                            config)

       console.log("data: ",data )
        dispatch({type: PRODUCT_CREATE_SUCCESS, payload: data})
    }  catch (error) {
        const message = error.response && error.response.data.message ? 
                        error.response.data.message : 
                        error.message
        
        if (message ==="Token failed") {
          //  dispatch(logout())
        }
        dispatch({
            type: PRODUCT_CREATE_FAIL,
            payload: message
                
        })
    }
}

//EDIT PRODUCT
export const editProduct = (id, title, price, stock, description, category, thumbnail) =>  async (dispatch, getState) => {
    try {
        dispatch({type: PRODUCT_EDIT_REQUEST });

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

        const { data} = await axios.patch(`${api.editProduct}${id}`,
                                            {title, price, stock, description, category, thumbnail},
                                            config)

       console.log("data: ",data )
        dispatch({type: PRODUCT_EDIT_SUCCESS, payload: data})
    }  catch (error) {
        const message = error.response && error.response.data.message ? 
                        error.response.data.message : 
                        error.message
        
        if (message ==="Token failed") {
          //  dispatch(logout())
        }
        dispatch({
            type: PRODUCT_EDIT_FAIL,
            payload: message
                
        })
    }
}
