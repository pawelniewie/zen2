import ProjectsList from './project/list/ProjectsList';

export default {
    path: '/',
    indexRoute: {component: ProjectsList},
    childRoutes: [
        require('./project').default,
        require('./user').default,
        require('./errors').default
    ]
}