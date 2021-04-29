import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { App } from './pages/App/App';

import { createAPI } from './api/api';
import { rootReducer } from "./redux/rootRaducer";

import './index.scss';

const init = () => {
  const api = createAPI();

  const store = createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(thunk.withExtraArgument(api))
    )
  );

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
  );
};

init();