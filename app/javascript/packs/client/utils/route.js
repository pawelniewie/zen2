import partialRight from 'lodash.partialright';

class Route {
    constructor(app, path) {
        this.app = app;
        this.path = path;

        this.onEnterHooks = [];
        this.onLeaveHooks = [];
    }

    onEnter(...args) {
        this.onEnterHooks
            .forEach(h => h.apply(this, args))
    }

    onLeave(...args) {
        this.onLeaveHooks
            .forEach(h => h.apply(this, args))
    }

    /**
     *
     * @param component
     * @returns {Route}
     */
    useComponent(component) {
        this.component = component;
        return this;
    }

    /**
     *
     * @param indexRoute
     * @returns {Route}
     */
    useIndexRoute(indexRoute) {
        this.indexRoute = indexRoute;
        return this;
    }

    /**
     * @param {...Object} childRoutes
     * @returns {Route}
     */
    useChildRoutes(...childRoutes) {
        this.childRoutes = childRoutes;
        return this;
    }

    beforeActionListener(actionName, func) {
        this.onEnterHooks.push((routeData) => {
            const removeAction = this.app.actionListener.beforeAction(actionName + '', partialRight(func, routeData));
            this.onLeaveHooks.push(removeAction);
        });
        return this;
    }

    afterActionListener(actionName, func) {
        this.onEnterHooks.push((routeData) => {
            const removeAction = this.app.actionListener.afterAction(actionName + '', partialRight(func, routeData));
            this.onLeaveHooks.push(removeAction);
        });
        return this;
    }
}

/**
 * @param {Object} app
 * @param {string} path
 * @returns {Route}
 */
export default function createRoute(app, path) {
    return new Route(app, path);
};

