import { createStore, combineReducers, applyMiddleware } from "redux"
import { thunk } from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension";
import { productDetailsReducer, productListReducer } from "./Reducers.js/ProductProducers";
import { cartReducer } from "./Reducers.js/CartReducers";
import { userLoginReducer } from "./Reducers.js/UserReducers";

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userLogin: userLoginReducer

});

const cartItemsFromLocalStorage = localStorage.getItem("cartItems") 
? JSON.parse(localStorage.getItem("cartItems"))
: []

const userFromLocalStorage = localStorage.getItem("userInfo")
? JSON.parse(localStorage.getItem("userInfo"))
: null

const initialState = {
    cart: {
        cartItems: cartItemsFromLocalStorage,

    },
    userLogin: {
        userInfo: userFromLocalStorage,
    },
};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState, 
    composeWithDevTools(applyMiddleware(...middleware))
);
export default store;