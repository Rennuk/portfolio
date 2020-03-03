const path = require('path');
const portNumber = 3000;
const express = require('express');

const app = express();

/* Routes */
const siteRoute = require('./routes/site');

/** ejs template definition */
app.set('view engine', 'ejs');
app.set('views', 'views');

/** Static files */
app.use(express.static(path.join(__dirname, 'public')));

app.use(siteRoute);

app.listen(portNumber);