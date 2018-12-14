import { History } from 'history';
import { RouterStore } from './RouterStore';
import { STORE_ROUTER } from 'app/constants';

export function createStores(history: History) {
  const routerStore = new RouterStore(history);
  return {
    [STORE_ROUTER]: routerStore,
  };
}
