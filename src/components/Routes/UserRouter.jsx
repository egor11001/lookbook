import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Navigate, Outlet } from 'react-router-dom';
import { Context } from '../..';

const UserRouter = observer(() => {
  const { user } = useContext(Context);

  if (!user.isAuth) {
    return <Navigate to="/authorization" />;
  }
  return <Outlet />;
});

export default UserRouter;
