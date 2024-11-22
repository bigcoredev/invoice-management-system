import api from "./api";
import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from "../store/constants";
import { type } from "@testing-library/user-event/dist/type";

export const registerUser = (userData) => async (dispatch) => {
  dispatch({type: REGISTER_REQUEST});
  try {
    const res = await api.post("/users/register", userData);

    return res;
  } catch (error) {

    dispatch({type: REGISTER_FAILURE});
    console.error("Server not found", error);
    return error;
  }
};

export const loginUser =  (credentials) =>  async (dispatch) => {
  dispatch({type: LOGIN_REQUEST});
  try {
    console.log("credentials", credentials)
    const res = await api.post("/users/login", credentials );
    console.log("Login Response:", res);

    return res; 
  } catch (error) {
    dispatch({type: REGISTER_FAILURE})
    console.error("Server not found", error);
    return error;
  }
};

export const deleteUser = async (userId) => {
  try {
    const res = await api.delete(`/users/${userId}`);
    console.log("Delete Response:", res);
    return res.data;
  } catch (error) {
    console.error("Server not found", error);
    return error;
  }
};
