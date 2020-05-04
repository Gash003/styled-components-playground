import React from 'react';
import {TodoItem} from "./TodoItem";
import {Header} from "../../layout/header";

const TodoList = () => {
    const todoList = [
        {
            label: 'Introduce Redux Devtools into project',
            value: true,
        },
        {
            label: 'Extract components into separate files / folders. Place them into appropriate folders. Name them appropriately.',
            value: true,
        },
        {
            label: 'Extract reucers, state, store into appropriate files, folders. Name them appropriately',
            value: true,
        },
        {
            label: 'Extract store\'s configuration into appropriate configuration file. Select appropriate place in the project',
            value: true,
        },
        {
            label: 'Don\'t use "combineReducers" in order to construc appReducer yet ;) Use JS for that',
            value: true,
        },
        {
            label: 'Name ALL components meaningfully. Names like "WrapperComponent", "ConnectedComponent" are prohibited :)',
            value: true,
        },
        {
            label: 'Add support for situations when input is empty (we should assume that increment step equals 0)',
            value: true,
        }
    ];

    return (
        <>
            <Header>Todo list:</Header>
            <ul>
                {
                    todoList.map((listItem, index) => (
                        <TodoItem label={listItem.label} value={listItem.value} key={index} />
                    ))
                }
            </ul>
        </>
    );
};

export default TodoList;
