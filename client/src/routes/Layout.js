import React, { Fragment } from 'react';
import { Redirect, Route, Switch } from 'react-router';

export default () => (
  <Fragment>
    {/* @TODO: Add your menu component here */}
    {/* Exercise 2 on thursday */}
    <Switch>
    {<Route exact path="/items" component={Items} />}
    <Route exact path="/welcome" component={Welcome} />
    <Route exact path="/share" component={Share} />
    <Route exact path="/profile" component={Profile} />
    <Route exact path="/profile/user:id" component={Items} />
    </Switch>
  </Fragment>
);
