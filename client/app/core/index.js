import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import ApolloClient from 'apollo-client';
import {ApolloProvider} from 'react-apollo';

import createRoutes from '../pages';
import configureStore from './store';

import style from '../styles/main.scss';

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
 */

const client = new ApolloClient();

const app = {
    apolloClient: client,
    history: browserHistory
};

app.store = configureStore(app, {});
app.asyncReducers = Object.create(null);

const routes = createRoutes(app);
render(
    <ApolloProvider store={app.store} client={client}>
        <Router history={app.history} routes={routes}/>
    </ApolloProvider>,
    document.getElementById('app')
);
