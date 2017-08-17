import React from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import ProjectsList from './ProjectsList';


const query = gql`{
    projects {
        edges {
            node {
                key
                name
            }
        }
    }
}`;


const ProjectsListWithData = graphql(query, {
    props: ({data}) => {
        if (data.projects) {
            return {
                projects: data.projects.edges.map(e => e.node)
            };
        }
        return {};
    },
    options: {
        fetchPolicy: 'network-only'
    }
})(ProjectsList);

export default ProjectsListWithData;
