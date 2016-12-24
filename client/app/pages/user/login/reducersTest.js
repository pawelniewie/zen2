import {assert} from 'chai';
import reducer from './reducers';
import * as actions from './actions';

describe('pages/user/login - reducers', () => {
    it(`action ${actions.userLoginStarted}`, () => {
        const state = reducer({}, actions.userLoginStarted());
        assert.deepEqual(state, {isLogging: true});
    });

    it(`action ${actions.userLoginSuccess}`, () => {
        const state = reducer({}, actions.userLoginSuccess());
        assert.deepEqual(state, {isLogging: false});
    });
});