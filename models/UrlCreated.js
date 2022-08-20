const mongoose = require('mongoose');

const UrlCountSchema = new mongoose.Schema({
    urlCreated: {
        type: Number,
        required: true
    }
},{
    timestamps: true
});


const CountSchema = mongoose.model('CountSchema', UrlCountSchema);
module.exports = CountSchema;