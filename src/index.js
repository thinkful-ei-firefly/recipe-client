import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './contexts/UserContext'
import { MenuProvider } from './contexts/MenuContext'
import App from './components/App/App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
    <BrowserRouter>
        <UserProvider>
            <MenuProvider>
                <App />
            </MenuProvider>
        </UserProvider>
    </BrowserRouter>
    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
