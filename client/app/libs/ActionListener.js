/**
 * @typedef {Object} ActionListenerDescriptor
 * @property {string} lifecycle
 * @property {Function} predicate
 * @property {Function} callback
 */

const addListener = function(lifecycle, actionPredicate, func) {
    let predicate = actionPredicate;
    if (typeof actionPredicate === 'string') {
        predicate = (action) => action.type === actionPredicate;
    } else if (!(actionPredicate instanceof Function)) {
        throw new Error(`Action predicate has to be string or function - ${typeof actionPredicate} provided`);
    }

    const listener = this.listeners.push({
        lifecycle: lifecycle,
        predicate: predicate,
        callback: func
    });

    return () => {
        const index = this.listeners.indexOf(listener);
        if (index !== -1) {
            this.listeners.splice(index, 1);
        }
    }
};

const LIFECYCLE_BEFORE = 'before';
const LIFECYCLE_AFTER = 'after';

const callListeners = function(lifecycle, action) {
    this.listeners
        .filter(listener => listener.lifecycle === lifecycle)
        .filter(listener => listener.predicate(action))
        .forEach(listener => listener.callback(action));
};

export default class ActionListener {
    constructor() {
        this.listeners = [];
    }

    /**
     * @param {(string|Function)} actionPredicate
     * @param {Function} func
     * @returns {Function}
     */
    afterAction(actionPredicate, func) {
        return addListener.call(this, LIFECYCLE_AFTER, actionPredicate, func);
    }

    /**
     * @param {(string|Function)} actionPredicate
     * @param {Function} func
     * @returns {Function}
     */
    beforeAction(actionPredicate, func) {
        return addListener.call(this, LIFECYCLE_BEFORE, actionPredicate, func);
    }

    middleware() {
        return (state) => {
            return (next) => {
                return (action) => {
                    callListeners.call(this, LIFECYCLE_BEFORE, action);
                    next(action);
                    callListeners.call(this, LIFECYCLE_AFTER, action);
                }
            }
        }
    }
}