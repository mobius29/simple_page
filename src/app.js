const express = require('express');
const controller = require('./controller');

const app = express();

app.set('views', `${__dirname}/../views`);
app.set('view engine', 'pug');

app.use('/', express.static(`${__dirname}/../public`));
app.use(express.urlencoded({ extended: true}));

app.use('/', controller);

app.get('/', (req, res) => res.render('index.pug'));

module.exports = app;