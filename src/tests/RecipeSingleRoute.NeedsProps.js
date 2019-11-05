import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import RecipeSingleRoute from '../Routes/RecipeSingleRoute/RecipeSingleRoute'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <BrowserRouter>
            <RecipeSingleRoute />
        </BrowserRouter>
    , div)
    ReactDOM.unmountComponentAtNode(div)
})