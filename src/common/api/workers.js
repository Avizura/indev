import {
  fetchWorkersStart,
  fetchWorkersSuccess,
  fetchWorkersFailure,
  fetchWorkersRanksStart,
  fetchWorkersRanksSuccess,
  fetchWorkersRanksFailure,
  fetchWorkersByQueryStart,
  fetchWorkersByQuerySuccess,
  fetchWorkersByQueryFailure
} from '../actions/workers';

export async function fetchWorkers(dispatch) {
  dispatch(fetchWorkersStart());
  try {
    const workers = await fetch('http://avengers.view.indev-group.eu/test_api/staff/', { method: 'GET' }).then((res) => res.json());
    dispatch(fetchWorkersSuccess(workers));

    return workers;
  } catch (err) {
    dispatch(fetchWorkersFailure());

    return { type: 'error' };
  }
}

export async function fetchWorkersRanks(dispatch) {
  dispatch(fetchWorkersRanksStart());
  try {
    const workersRanks = await fetch('http://avengers.view.indev-group.eu/test_api/posts/', { method: 'GET' }).then((res) => res.json());
    dispatch(fetchWorkersRanksSuccess(workersRanks));

    return workersRanks;
  } catch (err) {
    dispatch(fetchWorkersRanksFailure());

    return { type: 'error' };
  }
}

export function fetchWorkersByQuery(query) {
  return async (dispatch) => {
    dispatch(fetchWorkersByQueryStart());
    try {
      const workers = await fetch(`http://avengers.view.indev-group.eu/test_api/staff/?query=${query}`, { method: 'GET' }).then((res) => res.json());
      dispatch(fetchWorkersByQuerySuccess(workers));

      return workers;
    } catch (err) {
      dispatch(fetchWorkersByQueryFailure());

      return { type: 'error' };
    }
  };
}
