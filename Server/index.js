const express = require('express');
const cors = require('cors');
require('dotenv').config();

const takeCode = require('./routes/takecode');
const getCode = require('./routes/getcode');
require('./db');

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/', (req, res) => {
    res.send('Hello World!');
});

app.use(takeCode);
app.use(getCode);

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Url-Shortener',
        errorMessage: 'Page not found.'
    })
})

app.listen(port, () => console.log(`app listening on port ${port}!`));



