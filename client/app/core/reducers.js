import {combineReducers} from 'redux';

/**
 * @param {App} app
 * @returns {Reducer}
 */
export default function(app) {
    return combineReducers({
        apollo: app.apolloClient.reducer()
    });
}