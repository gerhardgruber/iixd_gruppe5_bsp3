import * as React from 'react';
import { inject } from 'mobx-react';
import {
  STORE_ROUTER,
} from 'app/constants';
import { Button } from 'reactstrap';


@inject(STORE_ROUTER)
export default class LoggedInHeader extends React.Component {
  render() {
    return <div>
      You are logged in
      <Button onClick={() => this.props[STORE_ROUTER].logout()}>
        logout
      </Button>
      text text text
    </div>
  }
}
