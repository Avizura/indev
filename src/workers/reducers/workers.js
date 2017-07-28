import unionBy from 'lodash/unionBy';

import {
  FETCH_WORKERS__SUCCESS,
  FETCH_WORKERS_BY_QUERY__SUCCESS,
  FETCH_WORKERS_RANKS__SUCCESS,
  EDIT_WORKER,
  UPDATE_WORKER,
  DELETE_WORKER,
  SORT_WORKERS
} from '../../common/actions/workers';

const initialState = {
  workers: [],
  workersRanks: [],
  editableWorker: {}
};

function tableReducer(state = initialState, action) {
  const { type } = action;
  switch (type) {
    case FETCH_WORKERS__SUCCESS: {
      const allWorkers = state.workers.concat(action.workers);
      const distinctWorkers = unionBy(allWorkers, (worker) => worker.id).sort(
        (worker1, worker2) => worker1.id - worker2.id
      );

      return { ...state, workers: distinctWorkers, editableWorker: distinctWorkers[0] };
    }

    case FETCH_WORKERS_BY_QUERY__SUCCESS: {
      return { ...state, workers: action.workers };
    }

    case FETCH_WORKERS_RANKS__SUCCESS: {
      return { ...state, workersRanks: action.workersRanks };
    }

    case EDIT_WORKER: {
      return { ...state, editableWorker: action.worker };
    }

    case UPDATE_WORKER: {
      const workers = state.workers.map((worker) => worker.id === action.worker.id ? action.worker : worker);
      return { ...state, workers, editableWorker: action.worker };
    }

    case DELETE_WORKER: {
      const workers = state.workers.filter((worker) => worker.id !== action.workerId);
      return { ...state, workers, editableWorker: {} };
    }

    case SORT_WORKERS: {
      const sortedWorkers = state.workers.slice().sort((worker1, worker2) => {
        const worker1Prop = worker1[action.sortField];
        const worker2Prop = worker2[action.sortField];
        if (!worker1Prop) {
          return -1;
        }

        let diff;

        if (action.sortField == 'birth_date') {
          diff = new Date(worker1Prop) - new Date(worker2Prop);
        }

        if (action.sortField == 'post') {
          diff = worker1Prop - worker2Prop;
        }

        if (action.sortField == 'first_name' || action.sortField == 'last_name') {
          diff = worker1Prop.localeCompare(worker2Prop);
        }

        return action.reverse ? diff : (-diff);
      });

      return { ...state, workers: sortedWorkers };
    }
  }

  return state;
}

export default tableReducer;
