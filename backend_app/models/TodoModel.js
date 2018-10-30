const mongoose = require('mongoose');

const todoModel = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    text: String,
    dateCreated: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Todo', todoModel);