import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home.js';
import Contact from '../pages/Contact.js';
import PropertiesViewAll from '../pages/PropertiesViewAll';
import PropertiesViewSingle from '../pages/PropertiesViewSingle';
import AddProperty from '../pages/AddProperty';
import Login from '../pages/Login';
import withAuth from './withAuth'



import NotFound from '../pages/Contact.js';
import SearchProperties from '../pages/SearchProperties.js';

class Main extends Component {
  render() {
  return (
    <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/home' component={Home}></Route>
      <Route exact path='/login' component={Login}></Route>
      <Route exact path='/contact' component={Contact}></Route>
      <Route exact path='/properties' component={PropertiesViewAll}></Route>
      <Route exact path='/addProperty' component={withAuth(AddProperty)}></Route>
      <Route exact path='/properties/:id' component={PropertiesViewSingle}></Route>
      <Route exact path='/searchProperties/:district&:minPrice&:maxPrice&:buildingType' component={SearchProperties}></Route>
      <Route component={NotFound} />
    </Switch>
  );
  }
}

export default Main;