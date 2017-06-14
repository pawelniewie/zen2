import newOrganization from './new';

export default (app) => ({
    path: 'organizations',
    childRoutes: [
        newOrganization(app),
    ]
});
