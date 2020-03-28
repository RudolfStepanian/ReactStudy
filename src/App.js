import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx'
import Nav from './components/Nav/Nav.jsx';
import {Route, withRouter} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {getMyPage} from "./Redux/auth-reducer";

class App extends React.Component {
    componentDidMount = () => {
        this.props.getMyPage();
    }

    render() {
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Nav state={this.props.store.getState().sidebarPage}/>
                <div className='app-wrapper-content'>
                    <Route path="/dialogs"
                           render={() => <DialogsContainer /*store={props.store}*/ />}/>
                    <Route path="/profile/:userId?"
                           render={() => <ProfileContainer /*store={props.store}*/ />}/>
                    <Route path="/Users"
                           render={() => <UsersContainer/>}/>
                    <Route path="/login"
                           render={() => <Login/>}/>
                </div>
            </div>
        );
    }
}

export default(
    withRouter,
    connect(null, {getMyPage})) (App));

// export default App;