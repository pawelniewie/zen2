import issuesRoute from './issues';

export default (store) => ({
    path: 'project',
    childRoutes: [
        issuesRoute(store)
    ]
});