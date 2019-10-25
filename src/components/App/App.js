import React from 'react';
import { Switch, Route } from 'react-router-dom';
 

//import routes
import PrivateRoute from '../../components/PrivateRoute/PrivateRoute'
import PublicOnlyRoute from '../../components/PublicOnlyRoute/PublicOnlyRoute'
import HomeRoute from '../../Routes/HomeRoute/HomeRoute'
import LoginRoute from '../../Routes/LoginRoute/LoginRoute'
import RecipesRoute from '../../Routes/RecipesRoute/RecipesRoute'
import ShoppingListRoute from '../../Routes/ShoppingListRoute/ShoppingListRoute'
import RegisterRoute from '../../Routes/RegisterRoute/RegisterRoute'
import AddRecipe from '../../Routes/AddRecipe/AddRecipe'
import NotFoundRoute from '../../Routes/NotFoundRoute/NotFoundRoute'
import RecipeSingleRoute from '../../Routes/RecipeSingleRoute/RecipeSingleRoute'
import IngredientsRoute from '../../Routes/IngredientsRoute/IngredientsRoute'

//import components
import Header from '../Header/Header'
import SideDrawer from '../SideDrawer/SideDrawer'
import BackDrop from '../BackDrop/BackDrop'

//import contexts
import MenuContext from '../../contexts/MenuContext'

class App extends React.Component {

  static contextType = MenuContext

  render() {

    let backDrop
    if(this.context.sideDrawerIsOpen) {
      backDrop = <BackDrop click = { this.context.handleCloseSideDrawer }/>
    }


    return(

        <div className = 'app' style={ { height: '100%' } }>

          <Header updateLogin = { this.updateLogin } />
          <SideDrawer updateLogin = { this.updateLogin } />
          { backDrop }

          <main style = { { marginTop: '64px' } }>
            <Switch>
              <Route
                exact
                path = { '/' }
                component = { HomeRoute }
                />
              <Route 
                exact
                path = { '/recipe/:id' }
                component = { RecipeSingleRoute }
              />
              <PublicOnlyRoute
                path = { '/login' }
                component = { LoginRoute }
              />
              <PublicOnlyRoute
                path = { '/register' }
                component = { RegisterRoute }
              />
              <Route 
                path = { '/newrecipe' }
                component = { AddRecipe }
              />
              <PrivateRoute
                path = { '/recipes' }
                component = { RecipesRoute }
              />
              <PrivateRoute
                  path = { '/shoppinglist' }
                  component = { ShoppingListRoute }
              />
              <PrivateRoute
                path = {'/ingredients'}
                component = { IngredientsRoute }
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
