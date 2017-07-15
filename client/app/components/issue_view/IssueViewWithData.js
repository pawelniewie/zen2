import React from 'react';
import { connect } from 'react-redux';
import { graphql, compose, withApollo } from 'react-apollo';
import gql from 'graphql-tag';

import IssueView from './IssueView';

const query = gql`
query Issue($issueId: ID) {
  issue(id: $issueId) {
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
}`;

const IssueViewWithData = compose(
    withApollo,
    connect(
        (state) => state,
        (dispatch, ownProps) => {
            return {
            }
        }
    ),
    graphql(query, {
        props: ({ data: { issue, loading } }) => {
            return { issue, loading };
        },
        options: (ownProps) => ({
            variables: {
                issueId: ownProps.issueId
            }
        })
    })
)(IssueView);

export default IssueViewWithData;
