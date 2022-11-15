import { Navigate, Outlet } from 'umi';
import { isUserAuth } from '../utils/auth';

const AuthRouteWrapper = () => {
  if (isUserAuth()) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
};
export default AuthRouteWrapper;
