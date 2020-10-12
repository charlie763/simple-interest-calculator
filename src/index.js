import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-reduct'
import { createStore } from 'redux'
import App from './App'
import interestReducer from './reducers/interestReducer'

let store = createStore(interestReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
