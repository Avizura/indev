import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';

import { reducer as formReducer } from 'redux-form';
import ui from './uiReducer.js';
import workers from './workers.js';

export const reducers = combineReducers({
  ui,
  workers,
  form: formReducer
});

export function configureStore(initialState = {}) {
    // ======================================================
    // Middleware Configuration
    // ======================================================
  const middleware = [thunk];

    // ======================================================
    // Store Instantiation
    // ======================================================
  const store = createStore(
      reducers,
      initialState,
      compose(
        applyMiddleware(...middleware),
        window.devToolsExtension ? window.devToolsExtension() : (f) => f
      )
  );

  return store;
}
