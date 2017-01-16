import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
import React from 'react';

import createComponent from 'app/functions/createComponent';
import ListingLayout from 'app/layouts/ListingLayout';
import IssuesList from './IssuesList';

const query = gql`
{
  issues {
    edges {
      node {
        id
      	key
        summary
        no
        description
        assignee {
          username
          email
        }
      }
    }
  }
}
`;

export default createComponent((app) => {
    return graphql(query, {
        props: ({data: {issues}}) => {
            const data = {
                issues: []
            };
            if (issues && issues.edges) {
                data.issues = issues.edges.map(e => e.node);
            }
            return data;
        }
    })(function IssuesPage(props) {
        return <ListingLayout title="Issues">
            <IssuesList {...props} />
        </ListingLayout>;
    });
});