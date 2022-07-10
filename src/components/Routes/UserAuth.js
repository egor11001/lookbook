import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/slices/authSlice';

const UserAuth = () => {
  const { isAuth } = useSelector(selectUser);
  const location = useLocation();
  return isAuth ? <Outlet /> : <Navigate to="/authorization" state={{ from: location }} replace />;
};

export default UserAuth;
