import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import { rootReducer } from './rootReducer';
import { rootWatcher } from './rootSagaWatcher';

const isDev = process.env.NODE_ENV === 'development';

const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [sagaMiddleware];

  const store = createStore(
    rootReducer,
    isDev
      ? composeWithDevTools(applyMiddleware(...middleware))
      : applyMiddleware(...middleware),
  );

  sagaMiddleware.run(rootWatcher);

  return store;
};

export { makeStore };
