'use strict';

const toState = function (formDataKey, key, extract) {
    return (arg) => {
        this[formDataKey][key] = extract(arg)
    };
};

export default function ({formErrorsKey = 'errors', formFieldKey = 'formFields'} = {}) {
    return {
        getErrors(field) {
            const val = this.state[formErrorsKey] && this.state[formErrorsKey][field];
            if (val !== undefined) {
                return Array.isArray(val) ? val : [val];
            }
        },

        formField(name) {
            return (ref) => {
                this[formFieldKey][name] = ref;
            }
        },

        getFormData() {
            return Object.keys(this[formFieldKey])
                .reduce((result, formFieldName) => {
                    result[formFieldName] = this[formFieldKey][formFieldName].value;
                    return result;
                }, {});
        }
    };
};