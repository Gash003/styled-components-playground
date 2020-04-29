import React from 'React';
import CounterComponent from './Components/CounterComponent';
import UserComponent from './Components/UserComponent';

export const App = () => (
  <>
    <UserComponent />
    <CounterComponent />

    <h1>Todo list:</h1>
    <ul>
      <li>
        <input type="checkbox" id="id1" defaultChecked />
        <label htmlFor="id1"> Introduce Redux Devtools into project</label>
      </li>
      <li>
        <input type="checkbox" id="id2" defaultChecked />
        <label htmlFor="id2">
          {' '}
          Extract components into separate files / folders. Place them into
          appropriate folders. Name them appropriately.
        </label>
      </li>
      <li>
        <input type="checkbox" id="id3" defaultChecked />
        <label htmlFor="id3">
          {' '}
          Extract reucers, state, store into appropriate files, folders. Name
          them appropriately
        </label>
      </li>
      <li>
        <input type="checkbox" id="id4" defaultChecked />
        <label htmlFor="id4">
          {' '}
          Extract store's configuration into appropriate configuration file.
          Select appropriate place in the project
        </label>
      </li>
      <li>
        <input type="checkbox" id="id5" defaultChecked />
        <label htmlFor="id5">
          {' '}
          Don't use "combineReducers" in order to construc appReducer yet ;) Use
          JS for that
        </label>
      </li>
      <li>
        <input type="checkbox" id="id6" defaultChecked />
        <label htmlFor="id6">
          {' '}
          Name ALL components meaningfully. Names like "WrapperComponent",
          "ConnectedComponent" are prohibited :)
        </label>
      </li>
      <li>
        <input type="checkbox" id="id7" defaultChecked />
        <label htmlFor="id7">
          {' '}
          Add support for situations when input is empty (we should assume that
          increment step equals 0)
        </label>
      </li>
    </ul>
    <hr />
  </>
);
