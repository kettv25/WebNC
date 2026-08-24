const express = require('express');
const mysql = require('mysql2');
require('dotenv').config({ quiet: true });

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello from Node.js server!');
});

app.post('/api/post', (req, res) => {
    const param = req.query.id;
    const body = req.body;
    const headers = req.headers;
    const idHeader = req.headers['idheader'];

    console.log('all data and Log:', param, body, headers, idHeader);

    res.json({
        message: 'This is a POST request test!',
        param,
        body,
        idHeader,
        headers
    });
});

const port = 3000;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});