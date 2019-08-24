const express = require('express');
const chalk = require('chalk');
const bodyParser = require('body-parser');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "..", "front", "release")));


const posts = [
    {title: 'M2', content: 'acv', date: ''},
    {title: 'M3', content: 'sdv', date: ''},
    {title: 'M4', content: 'vse', date: ''}
]

app.get('/posts', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.json(posts)
});

app.listen(port, () => {
    debug(`listening on port ${chalk.green(port)}`);
});
