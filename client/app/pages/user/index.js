import BrandedPage from '../../layouts/BrandedPage';

import loginRoute from './login';
import registrationRoute from './registration';

export default (store) => ({
    path: 'user',
    component: BrandedPage,
    childRoutes: [
        loginRoute(store),
        registrationRoute(store)
    ]
})
;