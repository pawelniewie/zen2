export default {

    componentDidMount() {
        this._isMounted = true;
    },

    componentWillUnmount() {
        this._isMounted = false;
    },

    wrapPromiseWithLoading(promise, options) {
        this.setState({isLoading: true});

        const makeLoaded = () => {
            if (this._isMounted) {
                this.setState({isLoading: false});
            }
        };

        promise.then(makeLoaded, () => {
            if (options && options.rejectDelay) {
                setTimeout(makeLoaded, options.rejectDelay);
                return;
            }

            makeLoaded();
        });
        return promise;
    }
}