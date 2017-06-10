import {connect} from 'react-redux';
import {userLogin} from './actions';
import LoginForm from './LoginForm';
import React from 'react';

const LoginFormPage = connect(
    (state) => (state.loginForm || {}),
    (dispatch) => {
        return {
            onLogin: ({login, password}) => {
                dispatch(userLogin(login, password));
            }
        }
    }
)(LoginForm);

export default LoginFormPage;