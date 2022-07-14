import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { ReactNotifications } from 'react-notifications-component';

import 'swiper/css/bundle';
import './scss/app.scss';
import 'react-notifications-component/dist/theme.css';
import Loader from './components/Loaders/Loader';

const Routes = React.lazy(() => import('./components/Routes/Routes'));
const RoutesMobile = React.lazy(() => import('./components/Routes/RoutesMobile'));

function App() {
  const isDesktop = useMediaQuery({
    query: '(min-width: 1224px)',
  });
  const isMobile = useMediaQuery({
    query: '(max-width: 1223px)',
  });
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
}

export default App;
