import React from 'React';
import { WrapperComponent } from './redux-playground/simple-redux';

export const App = () => (
  <>
    <h1>
      Todo list:
    </h1>
    <ul>
      <li>
        <input type="checkbox" id="id1" />
        <label for="id1"> Introduce Redux Devtools into project</label>
      </li>
      <li>
        <input type="checkbox" id="id2" />
        <label for="id2"> Extract components into separate files / folders. Place them into appropriate folders. Name them appropriately.</label>
      </li>
      <li>
        <input type="checkbox" id="id3" />
        <label for="id3"> Extract reucers, state, store into appropriate files, folders. Name them appropriately</label>
      </li>
      <li>
        <input type="checkbox" id="id4" />
        <label for="id4"> Extract store's configuration into appropriate configuration file. Select appropriate place in the project</label>
      </li>
      <li>
        <input type="checkbox" id="id5" />
        <label for="id5"> Don't use "combineReducers" in order to construc appReducer yet ;) Use JS for that</label>
      </li>
      <li>
        <input type="checkbox" id="id6" />
        <label for="id6"> Name ALL components meaningfully. Names like "WrapperComponent", "ConnectedComponent" are prohibited :)</label>
      </li>
      <li>
        <input type="checkbox" id="id7" />
        <label for="id7"> Add support for situations when input is empty (we should assume that increment step equals 0)</label>
      </li>
    </ul>
    <hr />

    <WrapperComponent />

  </>
);
