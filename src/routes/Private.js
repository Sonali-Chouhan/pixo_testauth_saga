import React from 'react';
import PageNotFound from '../pages/PagenotFound';
const Dashboard = React.lazy(() => import("../pages/Dashboard"))
const Profile = React.lazy(() => import("../pages/Profile"))


const PrivateRoutes = [
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/profile",
    element: <Profile />
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]
export default PrivateRoutes;