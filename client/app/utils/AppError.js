export default class AppError extends Error {
    constructor(message) {
        super(message);
        this.message = message;
        this.name = 'AppError';
        this.isAppError = true;
    }

    toJSON() {
        return {
            message: this.message,
            name: this.name,
            isAppError: true,
            stack: this.stack
        };
    }
}