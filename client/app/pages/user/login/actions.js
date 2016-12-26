import {createAction} from 'redux-actions';
import AppError from 'app/libs/AppError';
import {browserHistory} from 'react-router';

export const userLogin = function(login, password) {
    return (dispatch) => {
        dispatch(userLoginStarted());

        fetch('/users/sign_in.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: {
                    email: login,
                    password: password
                }
            })
        })
            .then(response => response.json())
            .then(json => {
                if (json.error) {
                    dispatch(userLoginFailed(new AppError(json.error)));
                } else {
                    dispatch(userLoginSuccess());
                }
            })
            .catch((err) => {
                dispatch(userLoginFailed(err));
            })
    }
};

export const userLoginStarted = createAction('USER_LOGIN_STARTED');
export const userLoginFailed = createAction('USER_LOGIN_FAILED');
export const userLoginSuccess = createAction('USER_LOGIN_SUCCESS');