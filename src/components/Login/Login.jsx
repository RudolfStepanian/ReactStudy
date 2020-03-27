import React from "react";
import {Field, reduxForm} from "redux-form";

const Login = (props) => {
    const onSubmit = (formData) =>{
        console.log(formData);
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
};

const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
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