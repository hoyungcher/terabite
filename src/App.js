import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Navbar from './shared/navigation/Navbar';
import About from './About';
import Recipe from './recipes/pages/Recipe';
import Recipes from './recipes/pages/Recipes';
import Inventory from './inventory/pages/Inventory';
import Meals from './meals/pages/Meals';

const App = () => {
  return (
  <Router>
    <Navbar />
    <Switch>
      <Route path="/meals" exact>
        <Meals />
      </Route>
      <Route path="/recipes" exact>
        <Recipes />
      </Route>
      <Route path="/recipe" exact>
        <Recipe />
      </Route>
      <Route path="/inventory" exact>
        <Inventory />
      </Route>
      <Route path="/" exact>
        <About />
      </Route>
      <Redirect to="/" />
    </Switch>
  </Router>
  );
}

export default App;
