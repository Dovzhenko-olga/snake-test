import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';

import reducer from './reducer';
import initialState from './initialState';

export default function configureStore() {
  const middlewares = [thunk];
  // if (process.env.NODE_ENV === 'development') {
  //   middlewares.push(logger);
  // }

  return createStore(reducer, initialState, applyMiddleware(...middlewares));
}