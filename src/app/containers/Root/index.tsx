import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { Button } from 'reactstrap';

import {
  STORE_ROUTER,
} from 'app/constants';

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
          {this.props.children}
          {this.renderDevTool()}
        </div>
      );
    } else {
      return <div>
        go away
          <Button onClick={() => this.props[STORE_ROUTER].login()}>
            login
          </Button>
        </div>
    }

  }
}
