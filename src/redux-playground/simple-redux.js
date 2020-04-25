import React, { useEffect } from 'react';
import { createStore, combineReducers } from 'redux';
import { connect, Provider } from 'react-redux';

// 1. Combine userReducer & counterReducer within appReducer
// 2. INCREMENT ACTION
// 3. Create incrementStep selector (store) => store.counter.incrementStep
// 4. Display Increment Step in input
// 5. Create action to modify increment step

// const finalAppState = {
//   users: {
//       appUsers: [],
//   },
//   counter: {
//       appCounter: 0,
//       incrementStep: 2,
//   }
// };

const initialUserState = {
  appUsers: [],
};
const initialCounterState = {
  appCounter: 0,
  incrementStep: 2,
};

const userReducer = (currentUserState = initialUserState, userAction) => {
  switch (userAction.type) {
    case 'USERS':
      return {
        appUsers: [...currentUserState.appUsers, userAction.payload.user],
      };
    default:
      return currentUserState;
  }
};

const incrementReducer = (
  currentCounterState = initialCounterState,
  incrementAction
) => {
  switch (incrementAction.type) {
    case 'INCREMENT':
      return {
        ...currentCounterState,
        appCounter:
          currentCounterState.appCounter + currentCounterState.incrementStep,
      };
    case 'SETINCREMENT':
      return {
        ...currentCounterState,
        incrementStep: incrementAction.payload.incrementStep,
      };
    default:
      return currentCounterState;
  }
};

const appReducer = combineReducers({
  users: userReducer,
  counter: incrementReducer,
});

const store = createStore(appReducer);

store.subscribe(() => console.table(store.getState()));

const usersActionCreator = (user) => {
  return {
    type: 'USERS',
    payload: {
      user: user,
    },
  };
};

const setIncrementActionCreator = (incrementStep) => {
  return {
    type: 'SETINCREMENT',
    payload: {
      incrementStep,
    },
  };
};

const User = {
  firstName: 'John',
  lastName: 'Smith',
};

const User1 = {
  firstName: 'Peter',
  lastName: 'Parker',
};

export const WrapperComponent = (props) => {
  return (
    <Provider store={store}>
      <UserComponent />
      <ConnectedComponent />
    </Provider>
  );
};
const emitUser = () => {
  store.dispatch(usersActionCreator(User1));
};

export const UserComponent = (props) => {
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

const setIncrement = (e) => {
  store.dispatch(setIncrementActionCreator(parseInt(e.target.value)));
};

export const CounterComponent = (props) => {
  return (
    <div>
      <h2>Counter Component</h2>
      <p>Current incremet: {props.incrementStep}</p>
      <input type="text" value={props.incrementStep} onChange={setIncrement} />
      <button onClick={props.increment}> add increment</button>
      <p>Current appCount: {props.appCounter}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    appCounter: state.counter.appCounter,
    incrementStep: state.counter.incrementStep,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: 'INCREMENT' }),
  };
};
const ConnectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterComponent);
