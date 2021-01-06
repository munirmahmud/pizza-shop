const express = require('express');
const ejs = require('ejs');
const expressLayout = require('express-ejs-layouts');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.render('home');
});

// Set template engine
app.use(expressLayout);
app.set('views', path.join(__dirname, '/client/resources/views'));
app.set('view engine', 'ejs');

app.listen(PORT, () => {
    console.log(`Server started http://localhost:${PORT}`);
});