import {INCREMENT, SET_INCREMENT} from "./setIncrementActionCreator";

const initialCounterState = {
  appCounter: 0,
  incrementStep: 1,
};

const incrementReducer = (
  currentCounterState = initialCounterState,
  incrementAction
) => {
  switch (incrementAction.type) {
    case INCREMENT:
      return {
        ...currentCounterState,
        appCounter:
          currentCounterState.appCounter + currentCounterState.incrementStep,
      };
    case SET_INCREMENT:
      return {
        ...currentCounterState,
        incrementStep: incrementAction.payload.incrementStep,
      };
    default:
      return currentCounterState;
  }
};

export default incrementReducer;
