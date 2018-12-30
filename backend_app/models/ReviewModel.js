const mongoose = require('mongoose');

const reviewModel = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    text: String,
    author: String,
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: null}
});

module.exports = mongoose.model('Review', reviewModel);