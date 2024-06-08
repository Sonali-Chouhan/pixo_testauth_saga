import { DASHBOARD_USER_SUCCESS } from "./admin.type";

const initialState = {
  users: {},
}


const DashboardReducer = (state=initialState, action) => {
  switch (action.type) {
    case DASHBOARD_USER_SUCCESS:
      return {
        ...state,
        users: action.payload
      }
    case "ERROR":
      return {
        ...state
      }
    default:
      return state
  }
}

export default DashboardReducer;
