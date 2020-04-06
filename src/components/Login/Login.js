import React from "react";
import {Field, reduxForm} from "redux-form";
import {reqiredField} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import style from "./../common/FormsControls/FormsControl.module.css"


const LoginForm = (props) => {
    return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={'Email'} name={'email'} component={'input'} validate={[reqiredField]}/>
                </div>
                <div>
                    <Field placeholder={'password'} name={'password'} component={'input'} validate={[reqiredField]} type={'password'}/>
                </div>
                <div>
                    <Field type={'checkbox'} component={'input'} name={'rememberMe'}/> remember me
                </div>
                <div className={style.formSummaryError}>
                    Error
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) =>{
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth){
        return <Redirect to={'/profile'}/>
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login)