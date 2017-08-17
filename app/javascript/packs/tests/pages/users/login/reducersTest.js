import {assert} from 'chai';
import reducer from 'app/pages/users/login/reducers';
import * as actions from 'app/pages/users/login/actions';

describe('pages/users/login - reducers', () => {
    it(`action ${actions.userLoginStarted}`, () => {
        const state = reducer({}, actions.userLoginStarted());
        assert.deepEqual(state, {isLogging: true});
    });

    it(`action ${actions.userLoginSuccess}`, () => {
        const state = reducer({}, actions.userLoginSuccess());
        assert.deepEqual(state, {isLogging: false});
    });
});
