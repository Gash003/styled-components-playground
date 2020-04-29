import { SET_INCREMENT } from './types';

const setIncrementActionCreator = (incrementStep) => {
  return {
    type: SET_INCREMENT,
    payload: {
      incrementStep,
    },
  };
};

export default setIncrementActionCreator;
