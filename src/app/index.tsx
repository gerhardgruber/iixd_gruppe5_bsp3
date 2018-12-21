import * as React from 'react';
import { hot } from 'react-hot-loader';
import { Router, Route, Switch } from 'react-router';
import { Root } from 'app/containers/Root';
import { Dashboard } from 'app/containers/Dashboard';

import 'bootstrap/dist/css/bootstrap.css';
import Analysis from './containers/Analysis';
import Profile from './containers/Profile';

// render react DOM
export const App = hot(module)(({ history }) => (
  <div style={{fontSize: '16px'}}>
    <Root>
      <Router history={history}>
        <Switch>
          <Route path="/analysis" component={Analysis} />
          <Route path="/profile" component={Profile} />
          <Route exact path="/" component={Dashboard} />
        </Switch>
      </Router>
    </Root>
  </div>
));
