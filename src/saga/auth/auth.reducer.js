import { LOGIN_USER_SUCCESS, LOGOUT_USERS_SUCCESS } from "./auth.type";

const initialState = {
  isAuth: {},
}
const LoginReducer = (state = initialState, action) => {

  switch (action.type) {

    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        isAuth: action.payload
      }
    case LOGOUT_USERS_SUCCESS:
      return {
        ...state,
        isAuth: null
      }
    default:
      return state
  }
}

export default LoginReducer;
