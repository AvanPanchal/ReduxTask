/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import React from 'react';
import thunk from 'redux-thunk';
import userDataDetails from './src/redux/reducers/userDatareducer';
const store = createStore(
    userDataDetails,
    applyMiddleware(thunk));

const Appcontainer = () => (
    <Provider store={store}>
        <App />
    </Provider>
)

AppRegistry.registerComponent(appName, () => Appcontainer);
