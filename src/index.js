import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './contexts/UserContext'
import { RecipeProvider } from './contexts/RecipeContext'
import { PublicRecipeProvider } from './contexts/PublicRecipeContext'
import App from './components/App/App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <BrowserRouter>
    <UserProvider>
      <RecipeProvider> 
        <PublicRecipeProvider>
          <App />
        </PublicRecipeProvider>
      </RecipeProvider>
    </UserProvider>
  </BrowserRouter>
  , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
