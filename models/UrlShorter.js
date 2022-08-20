const mongoose = require('mongoose');
const shortId = require('shortid');

const UrlShorterSchema = new mongoose.Schema({
    fullUrl: {
        type: String,
        required: true
    },
    shortUrl: {
        type: String,
        required: true,
        default: shortId.generate
    }
},{
    timestamps: true
});


const ShorterUrl = mongoose.model('ShorterUrl', UrlShorterSchema);
module.exports = ShorterUrl;