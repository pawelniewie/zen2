import {connect} from 'react-redux';
import {userLogin} from './actions';
import OrganizationForm from './OrganizationForm';
import React from 'react';

const NewOrganizationPage = connect(
    (state) => (state.loginForm || {}),
    (dispatch) => {
        return {
            onLogin: ({login, password}) => {
                dispatch(userLogin(login, password));
            }
        }
    }
)(OrganizationForm);

export default NewOrganizationPage;
