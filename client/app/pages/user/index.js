export default {
    path: 'user',
    childRoutes: [
        require('./login').default,
        require('./registration').default
    ]
};