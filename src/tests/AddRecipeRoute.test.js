import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import AddRecipeRoute from '../Routes/AddRecipe/AddRecipe';


it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <AddRecipeRoute />
        </BrowserRouter>
    , div);
    ReactDOM.unmountComponentAtNode(div);
});