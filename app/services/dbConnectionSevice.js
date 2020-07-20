const dbConfig = require('../config/database.config.js');
const mongoose = require('mongoose');

exports.initDBConnection = async () => {
    mongoose.Promise = global.Promise;
    mongoose.connect(dbConfig.url, {
        useNewUrlParser: true
    }).then(() => {
        console.log("Successfully connected to the DB");
    }).catch(err => {
        console.log('Could not connect to the DB.', err);
        process.exit();
    });
}