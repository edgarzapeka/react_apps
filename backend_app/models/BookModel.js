const mongoose = require('mongoose');

const bookModel = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    summary: String,
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: null}
});

module.exports = mongoose.model('Book', bookModel);