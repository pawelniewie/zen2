import {combineReducers} from 'redux';

/**
 * @param {App} app
 * @param {Array<Function>} asyncReducers
 * @returns {Reducer}
 */
export default function(app, asyncReducers) {
    return combineReducers({
        apollo: app.apolloClient.reducer(),
        ...asyncReducers
    });
}