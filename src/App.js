import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav.jsx';
import {Route, withRouter} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {initializeApp} from "./Redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";

class App extends React.Component {
    componentDidMount = () => {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initializeApp) {
            return <Preloader/>
        }

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


const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

export default (
    withRouter,
        connect(mapStateToProps, {initializeApp})
)(App)

// export default App;