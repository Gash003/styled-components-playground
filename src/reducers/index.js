import userReducer from './userReducer';
import incrementReducer from './incrementReducer';

const appReducer = (state = {}, action) => {
  return {
    users: userReducer(state['users'], action),
    counter: incrementReducer(state['counter'], action),
  };
};

export default appReducer;
