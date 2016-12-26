import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import createReducers from './reducers';

/**
 * @param {App} app
 * @param {Object} initialState
 * @returns {Store}
 */
export default function configureStore(app, initialState) {
    return createStore(
        createReducers(app),
        initialState,
        compose(
            applyMiddleware(
                thunkMiddleware,
                app.apolloClient.middleware()
            ),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    );
}

export function injectAsyncReducer(app, name, asyncReducer) {
    app.asyncReducers[name] = asyncReducer;
    app.store.replaceReducer(createReducers(app, app.asyncReducers));
}

export function removeAsyncReducer(app, name) {
    delete app.asyncReducers[name];
    app.store.replaceReducer(createReducers(app, app.asyncReducers));
}