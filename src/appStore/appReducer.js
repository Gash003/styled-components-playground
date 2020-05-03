import userReducer from '../user/store/userReducer';
import incrementReducer from '../counter/store/incrementReducer';

const appReducer = (state = {}, action) => {
  return {
    users: userReducer(state['users'], action),
    counter: incrementReducer(state['counter'], action),
  };
};

export default appReducer;
