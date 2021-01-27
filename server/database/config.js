const Settings = require('../settings/settings');

module.exports = {
    [Settings.ENV]: {
    host: Settings.DB_HOST,
    port: Settings.DB_PORT,
    dialect: Settings.DB_DIALECT,
    protocol: Settings.DB_PROTOCOL,    
    username:Settings.DB_USER ,
    password: Settings.DB_PASSWORD,
    database: Settings.DB_NAME,
    }
}