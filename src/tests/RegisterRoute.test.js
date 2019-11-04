import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import RegisterRoute from '../Routes/RegisterRoute/RegisterRoute';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <RegisterRoute />
    </BrowserRouter>
  , div);
  ReactDOM.unmountComponentAtNode(div);
});