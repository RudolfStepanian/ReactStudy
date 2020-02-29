import React from 'react';
import './index.css';
import state from './Redux/state.js'
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {addPost, subscribe, updateNewPostText} from "./Redux/state";
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';


let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </BrowserRouter>,
        document.getElementById('root'));
};
rerenderEntireTree(state);

subscribe(rerenderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();