const express = require('express');

const app = express();

app.set('views', `${__dirname}/../views`);
app.set('view engine', 'pug');

app.use('/', express.static(`${__dirname}/../public`));
app.use(express.urlencoded({ extended: true}));

app.get('/', (req, res) => res.render('index.pug'));

module.exports = app;