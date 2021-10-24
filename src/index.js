import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { RoomPage } from 'Src/components/RoomPage/RoomPage';
import { makeStore } from './store/index';

import './styles/main.scss';

const store = makeStore();

const rootElement = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <RoomPage />
  </Provider>,
  rootElement,
);
