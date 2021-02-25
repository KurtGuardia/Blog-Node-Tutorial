// import { dbURI } from './config';
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogsRoutes = require('./routes/blogRoutes');
const dbURI = require('./config');

// express app
const app = express();

// connect to mongodb & listen for requests
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
app.use(express.urlencoded({ extended: true }));

// routes
app.get('/', (req, res) => {
  res.redirect('/blogs');
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

// blog routes
app.use('/blogs', blogsRoutes);

// 404 page
app.use((req, res) => {
  res.render('404', { title: 'Not Found' });
});
