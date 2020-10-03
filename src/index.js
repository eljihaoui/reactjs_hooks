import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider} from 'react-redux'
import rootReducer from './reducers';
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const storeApp=createStore(rootReducer,devTools);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeApp}>
          <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


