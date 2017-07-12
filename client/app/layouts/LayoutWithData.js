import React from 'react';
import { connect } from 'react-redux';
import { userLogOut } from './actions';
import { browserHistory } from 'react-router';
import { graphql, compose, withApollo } from 'react-apollo';
import gql from 'graphql-tag';
import Layout from './Layout';

const query = gql`{
    currentUser {
        user {
            id
            email
            username
            first_name
            last_name
        }
        anonymous
    }
}`;

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
        props: ({ data: { currentUser, loading } }) => {
            return { currentUser, isLoading: loading };
        }
    })
)(Layout);

export default LayoutWithData;
