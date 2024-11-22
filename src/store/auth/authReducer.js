import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from "../constants";

const initialState = {
  payload: {},
  loading: false,
  error: null,
  registerSuccess: false,
  loginSuccess: false,
  loginFailure: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return { ...state, loading: true, error: null };
    case REGISTER_SUCCESS:
      return { ...state, loading: false, registerSuccess: true };
    case REGISTER_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case LOGIN_REQUEST:
      return { ...state, loading: true, error: null, loginFailure: false };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: true,
        loginSuccess: true,
        payload: action.payload,
      };
    case LOGIN_FAILURE:
      return { ...state, loading: false, loginFailure: true };
    default:
      return state;
  }
};

export default authReducer;
