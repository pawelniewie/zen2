import issuesRoute from './issues';
import createProjectRoute from './create';

export default (app) => ({
    path: 'project',
    childRoutes: [
        createProjectRoute(app),
        issuesRoute(app)
    ]
});