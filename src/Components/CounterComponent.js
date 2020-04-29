import React from 'react';
import { connect } from 'react-redux';
import store from '../store';
import setIncrementActionCreator from '../actions/setIncrementActionCreator';

const setIncrement = (e) => {
  const newIncrement = parseInt(e.target.value);
  isNaN(newIncrement)
    ? store.dispatch(setIncrementActionCreator(0))
    : store.dispatch(setIncrementActionCreator(newIncrement));
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

export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent);
