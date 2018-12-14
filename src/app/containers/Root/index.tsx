import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { Button } from 'reactstrap';

import {
  STORE_ROUTER,
} from 'app/constants';
import LoggedInHeader from 'app/components/LoggedInHeader';
import LoggedOutHeader from 'app/components/LoggedOutHeader';

@inject(STORE_ROUTER)
@observer
export class Root extends React.Component<any, any> {
  renderDevTool() {
    if (process.env.NODE_ENV !== 'production') {
      const DevTools = require('mobx-react-devtools').default;
      return <DevTools />;
    }
  }

  render() {
    if ( this.props[STORE_ROUTER].loggedIn) {
      return (
        <div className="container">
          <LoggedInHeader />
          {this.props.children}
          {this.renderDevTool()}
        </div>
      );
    } else {
      return <div>
        <LoggedOutHeader />
          go away
          <Button onClick={() => this.props[STORE_ROUTER].login()}>
            login
          </Button>
        </div>
    }

  }
}
