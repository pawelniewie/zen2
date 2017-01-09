import React from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import AppLayout from './AppLayout';

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
const AppLayoutWithData = graphql(query, {
    props: ({data: {user}}) => {
        return {user};
    }
})(AppLayout);

export default AppLayoutWithData;