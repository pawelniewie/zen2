import ProjectsList from './project/list/ProjectsList';

import projectRoute from './project';
import userRoute from './user';
import errorsRoute from './errors';

import AppLayoutWithData from '../layouts/AppLayoutWithData';

export default (app) => ({
    path: '/',
    component: AppLayoutWithData,
    indexRoute: {component: ProjectsList},
    childRoutes: [
        projectRoute(app),
        userRoute(app),
        errorsRoute(app)
    ]
});