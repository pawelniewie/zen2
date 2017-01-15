const key = '__createdComponent';

export default function createComponent(func) {
    return function (app) {
        if (func[key]) {
            return func[key];
        }
        return func[key] = func(app);
    }
};