import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import HomeRoute from '../Routes/HomeRoute/HomeRoute';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <HomeRoute />
    </BrowserRouter>
  , div);
  ReactDOM.unmountComponentAtNode(div);
});