export default function createComponent(func) {
    let result;
    return function (app) {
        if (result) {
            return result;
        }
        return result = func(app);
    }
};