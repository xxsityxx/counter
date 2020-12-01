import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import AppContainer from './App'
import reducer from './reducer';
import reportWebVitals from './reportWebVitals';

const store = createStore(reducer)


const Main = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
)

ReactDOM.render(<Main />, document.getElementById('App'))

reportWebVitals();
