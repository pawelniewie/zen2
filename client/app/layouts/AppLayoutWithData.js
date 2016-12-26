import React from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import AppLayout from './AppLayout';

const query = gql`{
    user: currentUser {
        id
        email
    }
}
`;
const AppLayoutWithData = graphql(query)(AppLayout);

export default AppLayoutWithData;