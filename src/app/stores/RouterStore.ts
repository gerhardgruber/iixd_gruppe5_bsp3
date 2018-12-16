import { History } from 'history';
import { observable, action } from 'mobx';
import {
  RouterStore as BaseRouterStore,
  syncHistoryWithStore
} from 'mobx-react-router';

export class RouterStore extends BaseRouterStore {
  @observable loggedIn: boolean;

  constructor(history?: History) {
    super();
    if (history) {
      this.history = syncHistoryWithStore(history, this);
    }
  }

  @action login() {
    this.loggedIn = true;
  }

  @action logout() {
    this.loggedIn = false;
  }
}

export default RouterStore;