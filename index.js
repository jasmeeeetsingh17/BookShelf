const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');
const Books = require('./models/books');
const AppError = require('./utils/AppError');
const wrapAsync = require('./utils/wrapAsync');


mongoose.connect('mongodb://127.0.0.1:27017/bookShelf')
    .then(() => {
        console.log("Mongo Connection Success")
    })
    .catch((err) => {
        console.log("Mongo Error")
        console.log(err)
    })

app.engine('ejs', ejsMate);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
const categories = ['science', 'fiction', 'commedy'];

//Routes
//Home Page 
app.get('/', (req, res) => {
    res.render('home');
    console.log("Home Page")
})
// CRUD 
//Create
app.get('/books/new', (req, res) => {
    res.render('bookShelf/new', { categories })
    console.log("Add New Book Page")
})

app.post('/books', wrapAsync(async (req, res) => {
    const book = new Books(req.body)
    await book.save()
    const name = book.name;
    res.redirect('/books');
    console.log(`${name} Page`)
}))

//Read 
app.get('/books', wrapAsync(async (req, res) => {
    const books = await Books.find({})
    res.render('bookShelf/index', { books })
    console.log("Books Page")
}))

app.get('/books/:id', wrapAsync(async (req, res) => {
    const { id } = req.params;
    const book = await Books.findById(id)
    const name = book.name;
    res.render('bookShelf/show', { book })
    console.log(`${name} Page`)
}))

//Update 
app.get('/books/:id/edit', wrapAsync(async (req, res) => {
    const { id } = req.params;
    const book = await Books.findById(id)
    res.render('bookShelf/edit', { book, categories })
    console.log("Edit Page")
}))

app.post('/books/:id', wrapAsync(async (req, res) => {
    const { id } = req.params;
    const book = await Books.findByIdAndUpdate(id, req.body, { runValidators: true, new: true });
    res.redirect(`/books/${id}`);
    console.log(`${book.name} Page`)
}))

//Delete
app.delete('/books/:id', wrapAsync(async (req, res) => {
    const { id } = req.params;
    await Books.findByIdAndDelete(id)
    res.redirect('/books')
    console.log("Books Page")
}))

// 404
app.all(/(.*)/, (req, res) => {
    res.status(404).render('404');
})

//Error
app.use((err, req, res, next) => {
    const { statusCode = 500, message = "Something went wrong" } = err;
    res.status(statusCode).render('error', { err });
})

//SERVER 
app.listen(3000, () => {
    console.log("Server Running")
})