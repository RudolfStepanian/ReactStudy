import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx'
import Nav from './components/Nav/Nav.jsx';
import Profile from './components/Profile/Profile.jsx';
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Nav state={props.store.getState().sidebarPage}/>
            <div className='app-wrapper-content'>
                <Route path="/dialogs"
                       render={() => <DialogsContainer /*store={props.store}*/ />}/>
                <Route path="/profile"
                       render={() => <Profile /*store={props.store}*/ />}/>
                <Route path="/Users"
                       render={() => <UsersContainer/>}/>
                <Route path="/Music" component={Profile}/>
                <Route path="/Settings" component={Profile}/>
            </div>
        </div>
    );
};

export default App;