const mongoose = require('mongoose');
const booksSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    qty: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        enum: ['science', 'fiction', 'commedy'],
        required: true
    }
})

const Books = mongoose.model('Books', booksSchema);

module.exports = Books;