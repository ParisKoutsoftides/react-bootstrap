import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home.js';
import Contact from '../pages/Contact.js';
import Properties from '../pages/Properties';

import NotFound from '../pages/Contact.js';

const Main =    () => {
  return (
    <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/home' component={Home}></Route>
      <Route exact path='/contact' component={Contact}></Route>
      <Route exact path='/properties' component={Properties}></Route>
      <Route component={NotFound} />
    </Switch>
  );
}

export default Main;