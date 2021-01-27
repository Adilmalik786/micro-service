const dotenv = require('dotenv');
dotenv.config();

// TODO: will load configuration in environment file
module.exports = {
    ENV:'development',
    port: process.env.APP_PORT,
    USE_HTTPS: false,
    TOKEN_SECRET: "%$JK%(^jfle^()_)^$bfd2e9283475kjdfhg^",
    QRCODE_GENERATION_URL: "QRCODE_GENERATION_URL",
    QRCODE_VERIFY_URL: "QRCODE_VERIFY_URL",
    SENDGRID_API_KEY: "SENDGRID_API_KEY",
    SENDER_EMAIL: "SENDER_EMAIL",
    DB_HOST: "database-mhdb-test.c8cjlovb7zf8.us-east-2.rds.amazonaws.com",
    DB_USER: "mhdbtestuser1",
    DB_PASSWORD: 'q1w2e3r4Q!W@E#R$',
    DB_NAME: "meyerhatchery_dev",
    DB_PORT: 3306,
    DB_DIALECT: "mysql",
    DB_PROTOCOL: "tcp",
};
