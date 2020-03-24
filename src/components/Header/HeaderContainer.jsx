import React from 'react';
import * as axios from "axios";
import {connect} from "react-redux";
import Header from "./Header";
import {getMyPage, setAuthUserData} from "../../Redux/auth-reducer";
import {userAPI} from "../../api/api";

class HeaderContainer extends React.Component {

    componentDidMount =  () => {
        this.props.getMyPage();
    };

    render() {
        return <Header {...this.props} />
    }
};


let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
};

export default connect(mapStateToProps, {getMyPage}) (HeaderContainer);