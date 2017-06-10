import React from 'react';
import ListingLayout from 'app/layouts/ListingLayout';
import Button from 'app/components/Button';
import {Link} from 'react-router';

import {Nav, NavItem} from 'react-bootstrap';
require('./projects-list.scss');

export default function ProjectsList({projects}) {
    return <ListingLayout title="Projects" sideHeaderContent={
        <Button isSmall={true} to="/projects/new">Create project</Button>
    }>
        <table className="table projects-list">
            <thead>
            <tr>
                <th className="projects-list--key">Key</th>
                <th className="projects-list--name">Project name</th>
            </tr>
            </thead>
            <tbody>
            {(projects || []).map(project => (
                <tr key={project.key}>
                    <td className="projects-list--key">{project.key}</td>
                    <td className="projects-list--name"><Link to={`/projects/${project.key}`}>{project.name}</Link></td>
                </tr>
            ))}
            </tbody>
        </table>
    </ListingLayout>
};

ProjectsList.propTypes = {
    projects: React.PropTypes.array
};
