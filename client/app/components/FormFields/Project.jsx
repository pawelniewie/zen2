import React from 'react';
import projectBriefFragment from 'app/gql/fragments/projectBrief';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
import classNames from 'classnames';

class ProjectComponent extends React.Component {
    render() {
        const {
            projects,
            className,
            controlRef,
            ...otherProps
        } = this.props;

        delete otherProps.onChange;

        const classes = classNames('select', className);
        return <select className={classes} {...otherProps} ref={controlRef}>
            {projects.map((project) => {
                return <option key={project.id} value={project.id}>{project.key} - {project.name}</option>
            })}
        </select>;
    }
}

ProjectComponent.propTypes = {
    controlRef: React.PropTypes.func
};

const query = gql`
    {
        projects {
            edges {
                node {
                    ...projectBrief
                }
            }
        }
    }
    ${projectBriefFragment}
`;

const Project = graphql(query, {
    props: ({data: {projects}}) => {
        return {
            projects: (projects && projects.edges) ? projects.edges.map(p => p.node) : []
        }
    },
})(ProjectComponent);

export default Project;
