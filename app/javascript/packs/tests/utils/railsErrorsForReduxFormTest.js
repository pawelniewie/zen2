import {assert} from 'chai';
import subject from 'app/utils/railsErrorsForReduxForm';

describe('utils/railsErrorsForReduxForm', () => {
    it('unmarshal nested errors', () => {
        assert.deepEqual(subject({
            "organization.name": [
                "error"
            ]
        }), {
            organization: {
                name: ['error']
            }
        });
    });
});
