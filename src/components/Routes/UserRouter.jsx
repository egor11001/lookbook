import { Outlet, useLocation, Navigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { Context } from '../..';

const UserRouter = observer(() => {
  const { user } = useContext(Context);
  const location = useLocation();
  return (
    <div style={{ height: '906px', backgroundColor: 'white' }}>
      {user.getAuth ? (
        <Outlet />
      ) : (
        <Navigate to="/authorization" state={{ from: location }} replace />
      )}
    </div>
  );
});

export default UserRouter;
