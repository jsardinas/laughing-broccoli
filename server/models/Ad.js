const { Schema, model } = require('mongoose');

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
    }
});

const Ad = model('Ad', AdSchema);

module.exports = Ad;