import React from 'react';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from './Redux/redux-store.js'
import StoreContext, {Provider} from "./StoreContext";


let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App store={store}/>
            </Provider>
        </BrowserRouter>,
        document.getElementById('root'));
};
rerenderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
});


serviceWorker.unregister();