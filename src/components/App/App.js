import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './app.css'

//import routes
import PrivateRoute from '../../components/PrivateRoute/PrivateRoute'
import PublicOnlyRoute from '../../components/PublicOnlyRoute/PublicOnlyRoute'
import PublicRecipeRoute from '../../Routes/PublicRecipeRoute/PublicRecipeRoute'
import HomeRoute from '../../Routes/HomeRoute/HomeRoute'
import LoginRoute from '../../Routes/LoginRoute/LoginRoute'
import RegisterRoute from '../../Routes/RegisterRoute/RegisterRoute'
import RecipesRoute from '../../Routes/RecipesRoute/RecipesRoute'
import ShoppingListRoute from '../../Routes/ShoppingListRoute/ShoppingListRoute'
import AddRecipe from '../../Routes/AddRecipe/AddRecipe'
import RecipeSingleRoute from '../../Routes/RecipeSingleRoute/RecipeSingleRoute'
import IngredientsRoute from '../../Routes/IngredientsRoute/IngredientsRoute'
import PublicRecipesRoute from '../../Routes/PublicRecipesRoute/PublicRecipesRoute'
import NotFoundRoute from '../../Routes/NotFoundRoute/NotFoundRoute'
import aboutUs from '../../Routes/AboutUs/AboutUs'
import Footer from '../../components/Footer/footer'

//import components
import Header from '../Header/Header'
import SideDrawer from '../SideDrawer/SideDrawer'
import BackDrop from '../BackDrop/BackDrop'

//import contexts
import UserContext from '../../contexts/UserContext'



class App extends React.Component {

  static contextType = UserContext

  render() {

    let backDrop
    if(this.context.sideDrawerIsOpen) {
      backDrop = <BackDrop click = { this.context.handleCloseSideDrawer }/>
    }


    return(

      <div 
        className="app" 
        style={ { height: '100%' } }>

        <Header updateLogin={ this.updateLogin } />

        <SideDrawer updateLogin={ this.updateLogin } />

        { backDrop }

        <main style={ { marginTop: '64px' } }>
          <Switch>
            <Route
              exact
              path={ '/' }
              component={ HomeRoute }
              />
            <Route
              exact
              path={ '/publicrecipes'}
              component={ PublicRecipesRoute }
            />
            <Route
              path={ '/publicrecipes/:id' }
              component={ PublicRecipeRoute }
            />
            <Route
              path={ '/recipe/:id' }
              component={ RecipeSingleRoute }
            />
            <PublicOnlyRoute
              path={ '/login' }
              component={ LoginRoute }
            />
            <PublicOnlyRoute
              path={ '/register' }
              component={ RegisterRoute }
            />
            <Route
              path={ '/newrecipe' }
              component={ AddRecipe }
            />
            <PrivateRoute
              path={ '/recipes' }
              component={ RecipesRoute }
            />
            <PrivateRoute
              path={ '/editrecipe/:id' }
              component={ AddRecipe }
            />
            <PrivateRoute
                path={ '/shoppinglist' }
                component={ ShoppingListRoute }
            />
            <PrivateRoute
              path={ '/ingredients' }
              component={ IngredientsRoute }
            />
            <PrivateRoute
              path={ '/about' }
              component={ aboutUs }
            />
            <Route
              component={ NotFoundRoute }
            />
          </Switch>
        </main>

        <div className="app-spacer"></div>
        
        <Footer/>
      
      </div>
    )
  }
}

export default App;
