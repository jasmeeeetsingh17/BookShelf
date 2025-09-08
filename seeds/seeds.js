const Books = require('../models/books')

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/bookShelf')
    .then(() => {
        console.log("Mongo Connection Success")
    })
    .catch((err) => {
        console.log("Mongo Error")
        console.log(err)
    })

const books = [
    {
        name: "Cosmos",
        qty: 8,
        category: "science"
    },
    {
        name: "The Theory of Everything",
        qty: 6,
        category: "science"
    },
    {
        name: "1984",
        qty: 20,
        category: "fiction"
    },
    {
        name: "To Kill a Mockingbird",
        qty: 14,
        category: "fiction"
    },
    {
        name: "Catch-22",
        qty: 9,
        category: "commedy"
    }
];

Books.insertMany(books)
    .then(p => {
        console.log(p)
    })
    .catch(e => {
        console.log(e)
    })
