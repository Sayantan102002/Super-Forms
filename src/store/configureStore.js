import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from '../reducers/index';
const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['router'],
};
export const history = createBrowserHistory();
const persistedReducer = persistReducer(persistConfig, rootReducer(history));

export default function configureStore(preloadedState) {
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    persistedReducer,
    preloadedState,
    composeEnhancer(applyMiddleware(routerMiddleware(history)), applyMiddleware(thunk)),
  );

  const persistor = persistStore(store);
  // return store;
  return { store, persistor };
}
