const express = require('express');
const university = require('./routes/index');

const port = 1245;
const app = express();

app.use('/', university);
app.listen(port);
