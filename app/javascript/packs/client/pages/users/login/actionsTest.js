import {assert} from 'chai';
import * as actions from './actions';

describe('pages/users/login - actions', () => {
    it('user login success', () => {
        assert.deepEqual(actions.userLoginSuccess(), {
            type: 'USER_LOGIN_SUCCESS'
        });
    });
});
