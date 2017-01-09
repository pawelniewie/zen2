export default function wrapPromiseWithLoading(component, promise, options) {
    component.setState({...component.state, isLoading: true});

    const makeLoaded = () => {
        if (component.isMounted) {
            component.setState({...component.state, isLoading: false});
        }
    };

    const onLoaded = () => {
        if (options && options.delay) {
            setTimeout(makeLoaded, options.delay);
            return;
        }

        makeLoaded();
    };

    promise.then(onLoaded, onLoaded);
    return promise;
}