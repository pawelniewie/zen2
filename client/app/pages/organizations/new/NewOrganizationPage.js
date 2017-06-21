import { connect } from 'react-redux';
import { userLogin } from './actions';
import OrganizationForm from './OrganizationForm';
import React from 'react';
import { compose } from 'react-apollo';
import { reduxForm } from 'redux-form';

const NewOrganizationPage = compose(
    connect(
        (state) => (state.loginForm || {}),
        (dispatch) => {
            return {
                onLogin: ({ login, password }) => {
                    dispatch(userLogin(login, password));
                }
            }
        }
    ),
    reduxForm({ form: 'newOrganization' })
)(OrganizationForm);

export default NewOrganizationPage;
