const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.status = 200;
    res.json({ "Name": "Eric Nkaka" });
    res.end()
});

module.exports = app;