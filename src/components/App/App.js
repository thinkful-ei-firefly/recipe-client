import React from 'react';
import { Switch, Route } from 'react-router-dom';

//import routes
import HomeRoute from '../../Routes/HomeRoute/HomeRoute'
import LoginRoute from '../../Routes/LoginRoute/LoginRoute'
import RegisterRoute from '../../Routes/RegisterRoute/RegisterRoute'
import NotFoundRoute from '../../Routes/NotFoundRoute/NotFoundRoute'

class App extends React.Component {
  render() {
    return(
      <div>
        <header>Recipe App</header>
        <main>
          <Switch>
            <Route
              exact
              path = { '/' }
              component = { HomeRoute } 
            />
            <Route
              exact
              path = { '/login' }
              component = { LoginRoute }
            />
            <Route 
              exact
              path = { '/register' }
              component = { RegisterRoute }
            />
            <Route 
              component = { NotFoundRoute }
            />
          </Switch>
        </main>
      </div>
    )
  }
}

export default App;
