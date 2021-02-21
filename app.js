const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

// express app
const app = express();

// connect to mongodb & listen for requests
const dbURI =
  'mongodb+srv://test:Test123@netninjatutotial.xkdfa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => app.listen(3000))
  .catch((err) => console.log(err));

// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// routes
app.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'New Blog' });
});

// blog routes

// 404 page
app.use((req, res) => {
  res.render('404', { title: 'Not Found' });
});
