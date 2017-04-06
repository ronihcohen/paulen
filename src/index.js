import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'


import {Provider} from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import restaurantsApp from './reducers'
import {initFirebase} from './FirebaseController'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const loggerMiddleware = createLogger();

const store = createStore(
    restaurantsApp,
    applyMiddleware(
        thunkMiddleware, // lets us dispatch() functions
        loggerMiddleware // neat middleware that logs actions
    )
);

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
            <App />
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
);

initFirebase(store);
