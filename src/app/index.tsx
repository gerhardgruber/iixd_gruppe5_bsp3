import * as React from 'react';
import { hot } from 'react-hot-loader';
import { Router, Route, Switch } from 'react-router';
import { Root } from 'app/containers/Root';
import { Spendierhousn } from 'app/containers/Spendierhousn';

import 'bootstrap/dist/css/bootstrap.css';

// render react DOM
export const App = hot(module)(({ history }) => (
  <Root>
    <Router history={history}>
      <Switch>
        <Route path="/" component={Spendierhousn} />
      </Switch>
    </Router>
  </Root>
));
