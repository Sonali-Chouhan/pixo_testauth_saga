import { DASHBOARD_USER } from "./admin.type";
import {  } from "./auth.type";

export const DashboardCreate = (data) => {
  return {
    type: DASHBOARD_USER,
    payload: data,
  };
};