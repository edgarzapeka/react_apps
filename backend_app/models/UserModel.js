const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const userModel = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    passwordConf: {
        type: String,
        required: true
    }
});

userModel.pre('save', function(next) {
    let user = this;
    console.log(user)
    bcrypt.hash(user.password, 10, (err, hash) => {
        if (err) return next(err);
        user.password = hash;
        next();
    })
});

module.exports = mongoose.model('User', userModel);