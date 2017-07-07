import { connect } from 'react-redux';
import { organizationNew } from './actions';
import OrganizationForm from './OrganizationForm';
import React from 'react';
import { compose } from 'react-apollo';
import { reduxForm } from 'redux-form';

const NewOrganizationPage = compose(
    connect(
        (state) => ({}),
        (dispatch) => {
            return {
                onSubmit: ({ user }) => {
                    dispatch(organizationNew(user));
                }
            }
        }
    ),
    reduxForm({ form: 'newOrganization' })
)(OrganizationForm);

export default NewOrganizationPage;
