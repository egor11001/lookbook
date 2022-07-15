import React, { Suspense, useContext, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { ReactNotifications } from 'react-notifications-component';
import { observer } from 'mobx-react-lite';

import 'swiper/css/bundle';
import './scss/app.scss';
import 'react-notifications-component/dist/theme.css';
import Loader from './components/Loaders/Loader';
import { Context } from '.';

const Routes = React.lazy(() => import('./components/Routes/Routes'));
const RoutesMobile = React.lazy(() => import('./components/Routes/RoutesMobile'));

const App = observer(() => {
  const isDesktop = useMediaQuery({
    query: '(min-width: 1224px)',
  });
  const isMobile = useMediaQuery({
    query: '(max-width: 1223px)',
  });

  const { user } = useContext(Context);
  console.log(user.userInfo);
  useEffect(() => {
    if (localStorage.getItem('UToken')) {
      user
        .checkAuth()
        .then(() => console.log(true))
        .catch(() => console.log(false));
    }
  }, []);

  return (
    <div className="App">
      <ReactNotifications />
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          {isDesktop && <Routes />}
          {isMobile && <RoutesMobile />}
        </Suspense>
      </BrowserRouter>
    </div>
  );
});

export default App;
