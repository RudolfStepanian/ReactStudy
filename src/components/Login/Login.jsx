import React from "react";
import {Field, reduxForm} from "redux-form";

const Login = (props) => {
    return <div>
        <h1>Login</h1>
        <LoginReduxForm/>
    </div>
};

const LoginForm = (props) => {
    return <form action="">
        <div>
            <Field placeholder={"Login"} type="" name={'login'} component={'input'}/>
        </div>
        <div>
            <Field placeholder={"Password"} type="password" name={'password'} component={'input'}/>
        </div>
        <div>
            <Field type="checkbox" name={'rememberMe'} component={'input'}/> Remember me
        </div>
        <div>
            <button>Log in</button>
        </div>
    </form>
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);


export default Login;