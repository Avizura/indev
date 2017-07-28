import throttle from 'lodash/throttle';

import { loadState, saveState } from '../common/localStorage';
import { bootstrap } from '../common/root';
import { configureStore } from './reducers';
import routes from './routes';

const persistedState = loadState();
const store = configureStore(persistedState);

store.subscribe(throttle(() => {
  saveState({
    workers: {
      workers: store.getState().workers.workers,
      workersRanks: store.getState().workers.workersRanks,
      editableWorker: {}
    }
  });
}, 1000));

bootstrap(routes, store);
