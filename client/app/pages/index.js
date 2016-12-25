import ProjectsList from './project/list/ProjectsList';

import projectRoute from './project';
import userRoute from './user';
import errorsRoute from './errors';

export default (app) => ({
    path: '/',
    indexRoute: {component: ProjectsList},
    childRoutes: [
        projectRoute(app),
        userRoute(app),
        errorsRoute(app)
    ]
});