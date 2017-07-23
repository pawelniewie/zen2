import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

import createRoutes from '../pages';
import configureStore from './store';
import ActionListener from '../utils/ActionListener';

require('../styles/main.scss');


require('es6-promise').polyfill();
require('isomorphic-fetch');

/**
 * @typedef {Object} History
 */

/**
 * @typedef {Object} App
 * @property {ApolloClient} apolloClient
 * @property {History} history
 * @property {Store} store
 * @property {Object} asyncReducers
 * @property {ActionListener} actionListener
 */

const client = new ApolloClient({
    networkInterface: createNetworkInterface({
        uri: '/gql',
        opts: {
            credentials: 'same-origin'
        }
    })
});

const app = {
    apolloClient: client,
    actionListener: new ActionListener()
};

app.store = configureStore(app, {});
app.history = syncHistoryWithStore(browserHistory, app.store);
app.asyncReducers = Object.create(null);

global.app = app;
const routes = createRoutes(app);

render(
    <ApolloProvider store={app.store} client={client}>
        <Router history={app.history} routes={routes}/>
    </ApolloProvider>,
    document.getElementById('app')
);
