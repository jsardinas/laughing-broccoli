const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');


const AdSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    }
});

const Ad = model('Ad', AdSchema);

module.exports = Ad;