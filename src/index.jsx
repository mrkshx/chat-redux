// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';
import channelsReducer from './reducers/channels_reducer';
import messagesReducer from './reducers/messages_reducer';
import selectedChannelReducer from './reducers/selected_channel_reducer';
import currentUserReducer from './reducers/current_user_reducer';

const initialState = {
  messages: [],
  channels: ['general', 'react', 'berlin'],
  currentUser: prompt("What is your username?") || `anonymous${Math.floor(10 + (Math.random() * 90))}`,
  selectedChannel: 'react'
};

// State and reducers
const reducers = combineReducers({
  channels: channelsReducer,
  messages: messagesReducer,
  selectedChannel: selectedChannelReducer,
  currentUser: currentUserReducer
});

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
