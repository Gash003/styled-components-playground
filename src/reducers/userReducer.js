import { USERS } from '../actions/types';

const initialUserState = {
  appUsers: [],
};

const userReducer = (currentUserState = initialUserState, userAction) => {
  switch (userAction.type) {
    case USERS:
      return {
        appUsers: [...currentUserState.appUsers, userAction.payload.user],
      };
    default:
      return currentUserState;
  }
};

export default userReducer;
