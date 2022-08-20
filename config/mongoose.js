const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/ShorterUrl');

const db = mongoose.connection;

db.on('error',console.error.bind(console,'rrror connecting to db'));

db.once('open',function(){
    console.log('Successfully connected to the database');
});


module.exports = db;