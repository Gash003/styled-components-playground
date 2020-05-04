export const USERS = 'USERS';
const usersActionCreator = (user) => {
  return {
    type: USERS,
    payload: {
      user: user,
    },
  };
};

export default usersActionCreator;
