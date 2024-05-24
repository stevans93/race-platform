class CustomError extends Error {
    constructor(statusCode, message, error) {
        super();
        this.statusCode = statusCode;
        this.message = message;
        this.type = 'CustomError';
        this.error = error;
    }
}
  
class BadRequest extends Error {
    constructor(message) {
        super();
        this.statusCode = 400;
        this.message = message;
        this.type = 'BadRequest';
    }
}
  
class NotFound extends Error {
    constructor(message) {
        super();
        this.statusCode = 404;
        this.message = message;
        this.type = 'NotFound';
    }
}
  
class Forbidden extends Error {
    constructor(message) {
        super();
        this.statusCode = 403;
        this.message = message;
        this.type = 'Forbidden';
    }
}
  
module.exports = {
    CustomError,
    BadRequest,
    NotFound,
    Forbidden,
};