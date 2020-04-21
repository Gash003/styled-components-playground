import React, {useEffect} from 'react';
import {createStore} from "redux";

const finalAppState = {
    users: {
        appUsers: [],
    },
    counter: {
        appCounter: 0,
        incrementStep: 2,
    }
};


const initialUserState = {
    appUsers: [],
};

// 1. Combine userReducer & counterReducer within appReducer
// const appReducer = ...

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

// const counterReducer = ...



const store = createStore(appReducer);


store.subscribe(() => console.table(store.getState()));

const actionCreator = (user) => {
    return {
        type: 'USERS',
        payload: {
            user: user,
        }
    };
};

// 2. INCREMENT ACTION


// 3. Create incrementStep selector (store) => store.counter.incrementStep

export const SimpleReduxComponent = () => {
    const User = {
        firstName: 'Roman',
        lastName: 'Polanski',
    };

    const User1 = {
        firstName: 'Peter',
        lastName: 'Parker',
    };

    useEffect(() => {
        store.dispatch(actionCreator(User));
    }, []);

    const emitUser = () => {
        store.dispatch(actionCreator(User1));
    };


    // 4. Display Increment Step in input

    // 5. Create action to modify increment step

    return (<button onClick={emitUser}> Emit action</button>);
};

