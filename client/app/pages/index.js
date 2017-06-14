import ProjectsListWithData from './projects/list/ProjectsListWithData';

import organizationsRoute from './organizations';
import projectsRoute from './projects';
import usersRoute from './users';
import errorsRoute from './errors';

import AppLayoutWithData from '../layouts/AppLayoutWithData';

export default (app) => ({
    path: '/',
    component: AppLayoutWithData,
    indexRoute: {component: ProjectsListWithData},
    childRoutes: [
        projectsRoute(app),
        organizationsRoute(app),
        usersRoute(app),
        errorsRoute(app)
    ]
});
