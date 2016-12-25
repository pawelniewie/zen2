import FocusedTask from '../../layouts/FocusedTask';

import loginRoute from './login';

export default (app) => ({
    path: 'user',
    component: FocusedTask,
    childRoutes: [
        loginRoute(app)
    ]
});