export const FETCH_WORKERS__START = 'FETCH_WORKERS__START';
export const FETCH_WORKERS__SUCCESS = 'FETCH_WORKERS__SUCCESS';
export const FETCH_WORKERS__FAILURE = 'FETCH_WORKERS__FAILURE';
export const FETCH_WORKERS_BY_QUERY__START = 'FETCH_WORKERS_BY_QUERY__START';
export const FETCH_WORKERS_BY_QUERY__SUCCESS = 'FETCH_WORKERS_BY_QUERY__SUCCESS';
export const FETCH_WORKERS_BY_QUERY__FAILURE = 'FETCH_WORKERS_BY_QUERY__FAILURE';
export const FETCH_WORKERS_RANKS__START = 'FETCH_WORKERS_RANKS__START';
export const FETCH_WORKERS_RANKS__SUCCESS = 'FETCH_WORKERS_RANKS__SUCCESS';
export const FETCH_WORKERS_RANKS__FAILURE = 'FETCH_WORKERS_RANKS__FAILURE';
export const EDIT_WORKER = 'EDIT_WORKER';
export const UPDATE_WORKER = 'UPDATE_WORKER';
export const DELETE_WORKER = 'DELETE_WORKER';
export const SORT_WORKERS = "SORT_WORKERS";

export function fetchWorkersStart() {
  return { type: FETCH_WORKERS__START };
}

export function fetchWorkersSuccess(workers) {
  return { type: FETCH_WORKERS__SUCCESS, workers };
}

export function fetchWorkersFailure(error) {
  return { type: FETCH_WORKERS__FAILURE, error };
}

export function fetchWorkersByQueryStart() {
  return { type: FETCH_WORKERS_BY_QUERY__START };
}

export function fetchWorkersByQuerySuccess(workers) {
  return { type: FETCH_WORKERS_BY_QUERY__SUCCESS, workers };
}

export function fetchWorkersByQueryFailure(error) {
  return { type: FETCH_WORKERS_BY_QUERY__FAILURE, error };
}

export function editWorker(worker) {
  return { type: EDIT_WORKER, worker };
}

export function fetchWorkersRanksStart() {
  return { type: FETCH_WORKERS_RANKS__START };
}

export function fetchWorkersRanksSuccess(workersRanks) {
  return { type: FETCH_WORKERS_RANKS__SUCCESS, workersRanks };
}

export function fetchWorkersRanksFailure(error) {
  return { type: FETCH_WORKERS_RANKS__FAILURE, error };
}

export function updateWorker(worker) {
  return { type: UPDATE_WORKER, worker };
}

export function deleteWorker(workerId) {
  return { type: DELETE_WORKER, workerId };
}

export function sortWorkers(sortField, reverse) {
  return { type: SORT_WORKERS, sortField, reverse };
}
