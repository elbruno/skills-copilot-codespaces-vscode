// Create web server using express
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');

// Create web server using express
app.listen(port, () => console.log(`Listening on port ${port}...`));

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Use body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import routes
const index = require('./routes/index');
const comments = require('./routes/comments');

// Use routes
app.use('/', index);
app.use('/comments', comments);
