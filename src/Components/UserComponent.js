import React, { useEffect } from 'react';
import store from '../store';
import usersActionCreator from '../actions/usersActionCreator';

const User = {
  firstName: 'John',
  lastName: 'Smith',
};

const User1 = {
  firstName: 'Peter',
  lastName: 'Parker',
};

const emitUser = () => {
  store.dispatch(usersActionCreator(User1));
};

export const UserComponent = () => {
  useEffect(() => {
    store.dispatch(usersActionCreator(User));
  });
  return (
    <div>
      <h2>User Component</h2>
      <button onClick={emitUser}> Emit User</button>
    </div>
  );
};

export default UserComponent;
