import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import PublicRecipesRoute from '../Routes/PublicRecipesRoute/PublicRecipesRoute'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <BrowserRouter>
            <PublicRecipesRoute />
        </BrowserRouter>
    , div)
    ReactDOM.unmountComponentAtNode(div)
})