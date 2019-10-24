import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import RecipesRoute from '../Routes/RecipesRoute/RecipesRoute';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <RecipesRoute />
        </BrowserRouter>
    , div);
    ReactDOM.unmountComponentAtNode(div);
});