import { compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import appReducer from './reducers';

export default function configureStore(preloadedState) {
  const enhancers = [composeWithDevTools()];
  const composedEnhancers = compose(...enhancers);

  const store = createStore(appReducer, preloadedState, composedEnhancers);

  return store;
}
