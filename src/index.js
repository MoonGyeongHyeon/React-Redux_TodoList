import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App";
import {createStore} from "redux";
import reducers from "./reducers";
import { Provider } from 'react-redux';

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

let rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    rootElement
);