const mongoose = require("mongoose");
const { dbHost, dbPass, dbName, dbPort, dbUser } = require('../app/config');

const uri = `mongodb+srv://${dbUser}:${dbPass}@${dbHost}/${dbName}?retryWrites=true&w=majority`;

mongoose.connect(uri);

const db = mongoose.connection;

module.exports = db;