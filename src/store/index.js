//  @flow

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { compact } from 'lodash';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import authReducer from '../store/auth/reducer';
import saga from './saga';

export default function initializeStore() {
  const sagaMiddleware = createSagaMiddleware();

  const middlewares = compact([
    thunk.withExtraArgument(),
    sagaMiddleware,
    null
  ]);

  const rootReducer = combineReducers({
    auth: authReducer
  });
  const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['auth']
  };
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const enhancer = composeEnhancers(applyMiddleware(...middlewares));

  const store = createStore(
    persistedReducer,
    {},
    enhancer
  );

  persistStore(
    store,
    null,
    () => {
      store.getState();
    }
  );

  sagaMiddleware.run(sagas);

  return store;
}