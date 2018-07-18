import React from 'react';
import ListingLayout from 'app/layouts/ListingLayout';
import Button from 'app/components/Button';
import {Link} from 'react-router';

require('./projects-list.scss');

export default function ProjectsList({projects}) {
    return <ListingLayout title="Projects" sideHeaderContent={
        <Button className="create-project-button" isSmall={true} to="/projects/new">Create project</Button>
    }>
        <table className="table projects-list">
            <thead>
            <tr>
                <th className="projects-list--header item-header--key">Key</th>
                <th className="projects-list--header item-header--name">Project name</th>
								<th className="projects-list--header item-header--members">Members</th>
								<th className="projects-list--header item-header--tasks-assigned">Assigned tasks</th>
								<th className="projects-list--header item-header--tasks-in-progress">In progress</th>
								<th className="projects-list--header item-header--tasks-completed">Completed</th>
								<th className="projects-list--header item-header--project-owner">Project Owner</th>
            </tr>
            </thead>
            <tbody>
            {(projects || []).map(project => (
                <tr key={project.key}>
                    <td className="projects-list--item">{project.key}</td>
                    <td className="projects-list--item"><Link to={`/projects/${project.key}`}>{project.name}</Link></td>
										<td className="projects-list--item">{Math.floor(Math.random() *25 + 2)}</td>
										<td className="projects-list--item">{Math.floor(Math.random() *25 + 2)}</td>
										<td className="projects-list--item">{Math.floor(Math.random() *55 + 2)}</td>
										<td className="projects-list--item">{Math.floor(Math.random() *95 + 2)}</td>
										<td className="projects-list--item">Pawel {Math.floor(Math.random() *9 + 2)} </td>
                </tr>
            ))}
            </tbody>
        </table>
    </ListingLayout>
};

ProjectsList.propTypes = {
    projects: React.PropTypes.array
};
