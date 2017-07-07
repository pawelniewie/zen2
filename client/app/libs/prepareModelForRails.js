import reduce from 'lodash/reduce'
import isArray from 'lodash/isArray'
import indexOf from 'lodash/indexOf'

const prepareModelForRails = (model, force = []) => {
    if (typeof model !== 'object') {
        return model
    } else {
        if (isArray(model)) {
            return model.map( m => prepareModelForRails(m, force) )
        } else {
            return reduce(model, (result, value, key) => {
                if (isArray(value) || indexOf(force, key) !== -1) {
                    result[`${key}_attributes`] = prepareModelForRails(value, force)
                } else {
                    result[key] = prepareModelForRails(value, force)
                }
                return result
            }, {})
        }
    }
};

export default prepareModelForRails;
