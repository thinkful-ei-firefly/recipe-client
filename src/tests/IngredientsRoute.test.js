import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import IngredientsRoute from '../Routes/IngredientsRoute/IngredientsRoute'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <BrowserRouter>
            <IngredientsRoute />
        </BrowserRouter>
    , div)
    ReactDOM.unmountComponentAtNode(div)
})