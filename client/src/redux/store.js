import rootReducer from './reducer';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const store =  createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;