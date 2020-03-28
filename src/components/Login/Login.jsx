import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login, logout} from "../../Redux/auth-reducer";

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
        login(formData.Email, formData.password, formData.rememberMe)
    };

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


export default connect(null, {
    login,
    logout
})(Login);