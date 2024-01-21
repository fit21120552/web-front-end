import { api } from "../../constants/api"
import { CART_REMOVE_ITEM, CART_ADD_ITEM } from "../Constants/CartConstants"

export const addTocart = (id, quantity) => async(dispatch, getState) => {
    const { data } = await axios.get(`${api.getAndCreateProduct}${id}`)

    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            product: data._id,
            title: data.title,
            thumbnail: data.thumbnail,
            price: data.price,
            stock: data.stock,
            quantity: quantity,
        }
    })

    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart = (id) => (dispatch, getState)=> {
    dispatch({
        type: CART_REMOVE_ITEM,
        payload: id,
    })

    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems))
    
}