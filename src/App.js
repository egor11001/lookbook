import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import Routes from './components/Routes/Routes';
import RoutesMobile from './components/Routes/RoutesMobile';

import 'swiper/css/bundle';
import './scss/app.scss';

function App() {
  const isDesktop = useMediaQuery({
    query: '(min-width: 1224px)',
  });
  const isMobile = useMediaQuery({
    query: '(max-width: 1223px)',
  });
  return (
    <div className="App">
      <BrowserRouter>
        {isDesktop && <Routes />}
        {isMobile && <RoutesMobile />}
      </BrowserRouter>
    </div>
  );
}

export default App;
