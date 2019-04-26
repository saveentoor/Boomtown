import React, { Fragment } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import ItemsContainer from '../pages/Items';
import Home from '../pages/Home';

export default () => (
  <Fragment>
    {/* @TODO: Add your menu component here */}
    {/* Exercise 2 on thursday */}
    <Switch>
      {<Route exact path="/items" component={ItemsContainer} />}
      <Route exact path="/welcome" component={Home} />
      {/* <Route exact path="/share" component={Share} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/profile/user:id" component={Profile} />
      <Redirect to="/items" /> */}
    </Switch>
  </Fragment>
);
