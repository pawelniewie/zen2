import issuesRoute from './issues';

export default (app) => ({
    path: 'project',
    childRoutes: [
        issuesRoute(app)
    ]
});