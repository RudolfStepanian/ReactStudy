import React from 'react';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from './Redux/redux-store.js'
import {Provider} from "react-redux";
// import StoreContext, {Provider} from "./StoreContext";


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App store={store}/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root'));



// rerenderEntireTree();
// store.subscribe(() => {
//     rerenderEntireTree();
// });


serviceWorker.unregister();
