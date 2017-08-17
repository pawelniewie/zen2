import FocusedTask from '../../layouts/FocusedTask';

import loginRoute from './login';

export default (app) => ({
    path: 'users',
    component: FocusedTask,
    childRoutes: [
        loginRoute(app)
    ]
});
