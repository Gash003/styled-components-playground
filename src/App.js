import React from 'React';
import UserComponent from './user/components/UserComponent';
import CounterComponent from './counter/components/CounterComponent';
import TodoList from "./todoList/components/TodoList";

export const App = () => (
    <>
        <UserComponent />
        <CounterComponent />
        <TodoList />
    </>
);
