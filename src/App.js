import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './components/Desctop/Routes/Routes';

import './scss/app.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
