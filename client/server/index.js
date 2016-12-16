'use strict';

const express = require('express');
const path = require('path');

const app = express();

app.engine('handlebars', require('express-handlebars')({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static(path.resolve(__dirname, '../../app/assets/webpack')));

app.get('*', (req, res) => {
    res.render('index');
});
var server = app.listen(3000, () => {
    console.log('server is running at %s', server.address().port);
});