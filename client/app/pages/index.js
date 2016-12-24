import ProjectsList from './project/list/ProjectsList';

import projectRoute from './project';
import userRoute from './user';
import errorsRoute from './errors';

export default (store) => ({
    path: '/',
    indexRoute: {component: ProjectsList},
    childRoutes: [
        projectRoute(store),
        userRoute(store),
        errorsRoute(store)
    ]
});