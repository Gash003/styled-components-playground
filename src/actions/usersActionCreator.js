import { USERS } from './types';
const usersActionCreator = (user) => {
  return {
    type: USERS,
    payload: {
      user: user,
    },
  };
};

export default usersActionCreator;
