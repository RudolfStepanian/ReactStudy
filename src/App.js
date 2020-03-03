import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx'
import Nav from './components/Nav/Nav.jsx';
import Profile from './components/Profile/Profile.jsx';
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Nav state={props.state.sidebarPage}/>
            <div className='app-wrapper-content'>
                <Route path="/dialogs"
                       render={() => <Dialogs
                           state={props.state.dialogsPage}
                           dispatch={props.dispatch}/>}/>
                <Route path="/profile"
                       render={() => <Profile
                           profilePage={props.state.profilePage}
                           dispatch={props.dispatch}/>}/>
                <Route path="/News" component={Profile}/>
                <Route path="/Music" component={Profile}/>
                <Route path="/Settings" component={Profile}/>
            </div>
        </div>
    );
};

export default App;