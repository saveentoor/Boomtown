import React, { Fragment } from 'react';
import { Redirect, Route, Switch } from 'react-router';

export default () => (
  <Fragment>
    {/* @TODO: Add your menu component here */}
    {/* Exercise 2 on thursday */}
    <Switch>{<Route exact path="/items" component={Items} />}</Switch>
  </Fragment>
);
