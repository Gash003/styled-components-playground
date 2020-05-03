export const INCREMENT = 'INCREMENT';
export const SET_INCREMENT = 'SET_INCREMENT';

const setIncrementActionCreator = (incrementStep) => {
  return {
    type: SET_INCREMENT,
    payload: {
      incrementStep,
    },
  };
};

export default setIncrementActionCreator;
