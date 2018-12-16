import { History } from 'history';
import { RouterStore } from './RouterStore';
import {STORE_ENTRIES, STORE_ROUTER} from 'app/constants';
import {EntryStore} from "app/stores/entryStore";

export function createStores(history: History) {
  const routerStore = new RouterStore(history);
  const entryStore = new EntryStore();
  return {
    [STORE_ENTRIES]: entryStore,
    [STORE_ROUTER]: routerStore,
  };
}
