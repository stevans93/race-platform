require('dotenv').config();

module.exports = {
    JWT_KEY: process.env.JWT_KEY,
    DB_URL: process.env.DB_URL,
    PORT: process.env.PORT,
    STRIPE_SK: process.env.STRIPE_SK,
    CORS_OPTIONS: {
        origin: (origin, callback) => {
            callback(null, true);
        }
    }
}