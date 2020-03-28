import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login, logout} from "../../Redux/auth-reducer";
import {Redirect} from "react-router-dom";

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    };

    if (props.isAuth){
        return <Redirect to={'/profile'} />
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
};

const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={"Email"} type="" name={'email'}
                   validate={[required]}
                   component={Input}/>
        </div>
        <div>
            <Field placeholder={"Password"} type="password" name={'password'}
                   validate={[required]}
                   component={Input}/>
        </div>
        <div>
            <Field type="checkbox" name={'rememberMe'}
                   component={Input}/> Remember me
        </div>
        <div>
            <button>Log in</button>
        </div>
    </form>
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

let mapStateToProps = (state) => ({
        isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {
    login,
    logout
})(Login);