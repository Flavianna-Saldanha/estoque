export class AppError extends Error {
    message;
    statusCode;
    constructor(message, statusCode = 400) {
        super(message);
        this.message = message;
        this.statusCode = statusCode;
        this.name = 'AppError';
        Object.setPrototypeOf(this, AppError.prototype);
    }
}
//# sourceMappingURL=apperror.js.map