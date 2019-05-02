import React, { Fragment } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Items from '../pages/Items';
import Home from '../pages/Home';
import Share from '../pages/Share';
import Profile from '../pages/Profile';
import MenuBar from '../components/MenuBar';


export default () => (
  <Fragment>
     <ViewerContext.Consumer>
      {({ viewer, loading }) => (
        <Switch>
          // ... Your routes
          <Redirect from="*" to="/items" />
        </Switch>
      )}
    </ViewerContext.Consumer>

    <Route  component={MenuBar} />
   
    <Switch>
      <Route exact path="/items" component={Items} />
      <Route exact path="/welcome" component={Home} />
      <Route exact path="/share" component={Share} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/profile/user:id" component={Profile} />
      <Redirect to="/items" />
    </Switch>
  </Fragment>
);
