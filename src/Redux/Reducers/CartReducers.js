/* eslint-disable no-case-declarations */
import {
  CART_ADD_ITEM,
  CART_DECREASE_ITEM,
  CART_INCREASE_ITEM,
  CART_REMOVE_ITEM,
  CLEAR_CART,
} from "../Constants/CartConstants";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x._id === item._id);

      if (existItem) {
        return {
          cartItems: state.cartItems.map((x) =>
            x._id === existItem._id
              ? { ...existItem, quantity: +existItem.quantity + +item.quantity }
              : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],

          // cartItems: state.cartItems.filter((x)=> {
          //     x.product !== action.payload
          // }),
        };
      }

    case CART_REMOVE_ITEM:
      return {
        cartItems: state.cartItems.filter((x) => x._id !== action.payload),
      };

    case CART_INCREASE_ITEM:
      return {
        cartItems: state.cartItems.map((x) => {
          if (x._id === action.payload) {
            return { ...x, quantity: +x.quantity + 1 };
          }
          return x;
        }),
      };
    case CART_DECREASE_ITEM:
      return {
        cartItems: state.cartItems.map((x) => {
          if (x._id === action.payload) {
            return { ...x, quantity: +x.quantity - 1 };
          }
          return x;
        }),
      };
    case CLEAR_CART:
      return {
        cartItems: [],
      };

    default:
      return state;
  }
};
