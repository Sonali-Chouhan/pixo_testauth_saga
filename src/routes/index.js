import { useRoutes } from "react-router-dom";
import PublicRoutes from './Public';
import PrivateRoutes from './Private';
import { useSelector } from "react-redux";

export function AppRoute() {
  const { isAuth } = useSelector((state) => {
    return {
      isAuth: state?.login?.isAuth
    }
  })
  let allRoutes = PublicRoutes;
  if (isAuth?.token) {
    allRoutes = PrivateRoutes;
  }
  let element = useRoutes(allRoutes)
  return isAuth ? (
    <div>
      {element}
    </div>) : element
}