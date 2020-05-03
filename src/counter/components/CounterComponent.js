import React from 'react';
import { connect } from 'react-redux';
import appStore from '../../appStore/appStore';
import setIncrementActionCreator, {INCREMENT} from '../store/setIncrementActionCreator';
import {Header} from "../../layout/header";
import {ButtonInput} from "../../layout/ButtonInput";

const setIncrement = (e) => {
  const newIncrement = parseInt(e.target.value);
  isNaN(newIncrement)
    ? appStore.dispatch(setIncrementActionCreator(0))
    : appStore.dispatch(setIncrementActionCreator(newIncrement));
};

export const CounterComponent = (props) => {
  return (
    <div>
      <Header>Counter Component</Header>
      <p>Current incremet: {props.incrementStep}</p>
      <ButtonInput
          inputValue={props.incrementStep}
          onInputChange={setIncrement}
          buttonLabel="Add increment"
          onButtonClick={props.increment}
      />
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
    increment: () => dispatch({ type: INCREMENT }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent);
