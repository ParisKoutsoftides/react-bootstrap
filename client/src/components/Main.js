import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home.js';
import Contact from '../pages/Contact.js';
import NotFound from '../pages/NotFound.js';

const Main =    () => {
  return (
    <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/home' component={Home}></Route>
      <Route exact path='/contact' component={Contact}></Route>
      <Route component={NotFound} />
    </Switch>
  );
}

export default Main;