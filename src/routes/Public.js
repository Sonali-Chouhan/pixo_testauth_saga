import React from 'react';
const Login = React.lazy(() => import("../pages/Login"))
const ResetPswd = React.lazy(() => import("../pages/ResetPswd"))

const PublicRoutes = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/resetpswd",
    element: <ResetPswd />
  }
]
export default PublicRoutes;