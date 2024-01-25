import axios from "axios";
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGIN_CLEAR_ERROR,
  USER_DELETE_FAIL,
  USER_DELETE_SUCCESS,
  USER_DELETE_REQUEST,
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
  CLEAR_CART,
} from "../Constants/UserConstants";
import { api } from "../../constants/api";

export const login = (username, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });

    const { data } = await axios.post(
      api.login,
      { username, password },
      api.config
    );

    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
    dispatch({ type: CLEAR_CART });

    localStorage.setItem(
      "userInfo",
      JSON.stringify({
        ...data.user,
        sessionId: data.sessionId,
      })
    );
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const clearError = () => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_CLEAR_ERROR });
    dispatch({ type: CLEAR_CART });
  } catch (error) {
    return;
  }
};

export const loginGoogle = (email) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });

    const { data } = await axios.post(api.login, { email }, api.config);

    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//LOG OUT
export const logout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: USER_LOGOUT });
  document.location.href = "/login";
};

export const register = (username, email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_REGISTER_REQUEST });

    const data = await axios.post(
      api.signup,
      { username, email, password },
      api.config
    );

    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteUser = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_DELETE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    };
    const body = {
      sessionId: userInfo.sessionId,
    };
    // console.log("body: ", body)

    console.log(`del ${api.deleteProduct + id}`);

    const { data } = await axios.delete(api.deleteUser + id, body, config);
    console.log("data: ", data);
    dispatch({ type: USER_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    if (message === "Token failed") {
      //  dispatch(logout())
    }
    dispatch({
      type: USER_DELETE_FAIL,
      payload: message,
    });
  }
};

export const listUser = () => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_LIST_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();
    const body = {
      sessionId: userInfo.sessionId,
    };
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };
    const { data } = await axios.post(api.getAllUser, body, config);

    console.log("list user:", data);
    dispatch({ type: USER_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USER_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//USER DETAILS
export const listUserDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: USER_DETAILS_REQUEST });
    const { data } = await axios.get(api.getUser + id);
    console.log("data:", data);
    dispatch({ type: USER_DETAILS_SUCCESS, payload: data.data.data });
  } catch (error) {
    dispatch({
      type: USER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
