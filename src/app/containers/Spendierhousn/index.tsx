import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { RouteComponentProps } from 'react-router';
import { Button } from 'reactstrap';
import {
  STORE_ROUTER,
} from 'app/constants';

export interface SpendierhousnProps extends RouteComponentProps<any> {
  /** MobX Stores will be injected via @inject() **/
  // [STORE_ROUTER]: RouterStore;
  // [STOURE_TODO]: TodoStore;
}

export interface SpendierhousnState {
}

@inject(STORE_ROUTER)
@observer
export class Spendierhousn extends React.Component<SpendierhousnProps, SpendierhousnState> {
  constructor(props: SpendierhousnProps, context: any) {
    super(props, context);
  }

  render() {
    return (
      <div>
        logged in!

        <Button onClick={() => this.props[STORE_ROUTER].logout() }>logout</Button>
      </div>
    );
  }
}
