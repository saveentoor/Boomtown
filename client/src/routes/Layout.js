import React, { Fragment } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Items from '../pages/Items';
import Home from '../pages/Home';
import Share from '../pages/Share';
import Profile from '../pages/Profile';
import MenuBar from '../components/MenuBar';
import { ViewerContext } from '../context/ViewerProvider';
import FullScreenLoader from '../components/FullScreenLoader';

export default () => (
  <Fragment>
    <ViewerContext.Consumer>
      {({ viewer, loading }) =>
       {if (loading) return <FullScreenLoader />;
        if (!viewer) {
          return (
          <Switch>
            <Route path="/welcome" component={Home} />
            <Redirect from="*" to="/welcome" />
          </Switch>
          )
        } return (
          <Fragment>
            <MenuBar />
            <Switch>
              <Route exact path="/items" component={Items} />
              <Route exact path="/share" component={Share} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/profile/user:id" component={Profile} />
              <Redirect from="*" to="/items" />
            </Switch>
          </Fragment>
        )
      }
    }
    </ViewerContext.Consumer>
  </Fragment>
);
