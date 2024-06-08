import { combineReducers } from "redux";
import LoginReducer from "./auth/auth.reducer";

const rootReducer = combineReducers({
    login: LoginReducer,
});
export default rootReducer;
