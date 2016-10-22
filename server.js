const express = require('express');
const handlebars = require('express-handlebars');
const logger = require('morgan');
const compression = require('compression');
const path = require('path');

const app = express();

app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

app.use(logger('dev'));

app.use(compression());

app.use(express.static(path.join(__dirname, 'client')));

app.get('/', (req, res) => res.render('index'));

const port = 4321;
app.listen(port, () => console.log(`Listening on port ${port}`));
