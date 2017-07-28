import {
  FETCH_WORKERS__START,
  FETCH_WORKERS__SUCCESS,
  FETCH_WORKERS__FAILURE,
  FETCH_WORKERS_RANKS__START,
  FETCH_WORKERS_RANKS__SUCCESS,
  FETCH_WORKERS_RANKS__FAILURE
} from '../../common/actions/workers';

const initialState = {
  loading: false
};

function uiReducer(state = initialState, action) {
  const { type } = action;
  switch (type) {
    case FETCH_WORKERS__START:
    case FETCH_WORKERS_RANKS__START: {
      return { ...state, loading: true };
    }

    case FETCH_WORKERS__SUCCESS:
    case FETCH_WORKERS__FAILURE:
    case FETCH_WORKERS_RANKS__SUCCESS:
    case FETCH_WORKERS_RANKS__FAILURE: {
      return { ...state, loading: false };
    }
  }

  return state;
}

export default uiReducer;
