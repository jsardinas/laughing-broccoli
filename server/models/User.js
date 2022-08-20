const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, 'Must use a valid email address'],
    },
    ads_id: [{
        type: Schema.Types.ObjectId,
        ref: 'Ad',
    }]
});

const User = model('User', UserSchema);

module.exports = User;