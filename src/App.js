import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import About from './About';

const App = () => {
  return (
  <Router>
    <Switch>
      <Route path="/">
        <About />
      </Route>
      <Redirect to="/" />
    </Switch>
  </Router>
  );
}

export default App;
