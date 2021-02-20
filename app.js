const express = require('express');

const app = express();

app.listen(3000);

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'New Blog' });
});

app.use((req, res) => {
  res.render('404', { title: 'Not Found' });
});
