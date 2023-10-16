require('dotenv').config();

module.exports = {
    username: process.env.ORACLE_USERNAME,
    password: process.env.ORACLE_PASSWORD,
    connectString: process.env.ORACLE_CONNECT_STRING,
};
