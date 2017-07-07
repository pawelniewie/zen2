import reduce from 'lodash/reduce'
import isArray from 'lodash/isArray'

const prepareModelForRails = (model) => {
    if (typeof model !== 'object') {
        return model
    } else {
        if (isArray(model)) {
            return model.map( m => prepareModelForRails(m) )
        } else {
            return reduce(model, (result, value, key) => {
                if (isArray(value)) {
                    result[`${key}_attributes`] = prepareModelForRails(value)
                } else {
                    result[key] = prepareModelForRails(value)
                }
                return result
            }, {})
        }
    }
};

export default prepareModelForRails;
