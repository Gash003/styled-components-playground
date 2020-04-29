import { createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import appReducer from './reducers';
import configureStore from './configureStore';

const store = configureStore({});
// const store = createStore(appReducer, composeWithDevTools());

export default store;