import ProjectsListWithData from './project/list/ProjectsListWithData';

import projectRoute from './project';
import userRoute from './user';
import errorsRoute from './errors';

import AppLayoutWithData from '../layouts/AppLayoutWithData';

export default (app) => ({
    path: '/',
    component: AppLayoutWithData,
    indexRoute: {component: ProjectsListWithData},
    childRoutes: [
        projectRoute(app),
        userRoute(app),
        errorsRoute(app)
    ]
});