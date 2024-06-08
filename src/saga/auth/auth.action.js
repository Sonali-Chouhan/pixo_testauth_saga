import { LOGIN_USER, LOGOUT_USERS, RESET_USERS } from "./auth.type";

export const LoginCreate = (data) => {
  return {
    type: LOGIN_USER,
    payload: data,
  };
};
export const CreateLogout = () => {
  return {
    type: LOGOUT_USERS
  }
}
export const CreateReset = () => {
  return {
    type: RESET_USERS
  }
}