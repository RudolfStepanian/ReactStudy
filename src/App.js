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
            <Nav state={props.state.sidebar}/>
            <div className='app-wrapper-content'>
                <Route path="/dialogs"
                       render={() => <Dialogs
                           state={props.state.messagesPage}/>}/>
                <Route path="/profile"
                       render={() => <Profile
                           state={props.state.profilePage}
                           addPost={props.addPost}/>}/>
                <Route path="/News" component={Profile}/>
                <Route path="/Music" component={Profile}/>
                <Route path="/Settings" component={Profile}/>
            </div>
        </div>
    );
};

export default App;