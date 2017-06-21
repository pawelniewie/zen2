import React from 'react';
import { connect } from 'react-redux';
import { userLogOut } from './actions';
import { browserHistory } from 'react-router';
import { graphql, compose, withApollo } from 'react-apollo';
import gql from 'graphql-tag';
import Layout from './Layout';

const query = gql`{
    user: currentUser {
        id
        email
        username
        first_name
        last_name
    }
}
`;
const LayoutWithData = compose(
    withApollo,
    connect(
        (state) => state,
        (dispatch, ownProps) => {
            return {
                onLogOut: () => {
                    dispatch(userLogOut(ownProps.client));
                },
                onLogIn: () => {
                    browserHistory.push('/users/login');
                }
            }
        }
    ),
    graphql(query, {
        props: ({ data: { user, isLoading } }) => {
            return { user, isLoading };
        }
    })
)(Layout);

export default LayoutWithData;
