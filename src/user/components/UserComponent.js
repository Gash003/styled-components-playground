import React, { useEffect } from 'react';
import appStore from '../../appStore/appStore';
import usersActionCreator from '../store/usersActionCreator';
import {Header} from "../../layout/header";

const User = {
  firstName: 'John',
  lastName: 'Smith',
};

const User1 = {
  firstName: 'Peter',
  lastName: 'Parker',
};

const emitUser = () => {
  appStore.dispatch(usersActionCreator(User1));
};

export const UserComponent = () => {
  useEffect(() => {
    appStore.dispatch(usersActionCreator(User));
  });
  return (
    <div>
      <Header>User Component</Header>
      <button onClick={emitUser}>Emit User</button>
    </div>
  );
};

export default UserComponent;
