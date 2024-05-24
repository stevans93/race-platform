require('dotenv').config();

module.exports = {
    JWT_KEY: process.env.JWT_KEY,
    JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN,
    DB_URL: process.env.DB_URL,
    PORT: process.env.PORT,
    NODE_ENV: process.env.NODE_ENV,
    CORS_OPTIONS: {
        corsOptionsDev: {
            origin: ['http://localhost:5173', '*'],
            methods: ['POST', 'PUT', 'GET', 'OPTIONS', 'DELETE', 'HEAD', 'PATCH'],
        },
        corsOptionsProd: {
            origin: ['*'],
            methods: ['POST', 'PUT', 'GET', 'OPTIONS', 'DELETE', 'HEAD', 'PATCH'],
        },
    }
}