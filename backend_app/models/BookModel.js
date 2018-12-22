const mongoose = require('mongoose');

const bookModel = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    title: String,
    description: String,
    author: String,
    additionalInfo: Object,
    price: Number
},{
    timestamps: true
});

module.exports = mongoose.model('Book', bookModel);