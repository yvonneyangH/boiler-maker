const path = require('path');
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const {db} = require('./db');

app.use(morgan('dev'));
// you'll of course want static middleware so your browser can request things like your 'bundle.js'
app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api', require('./apiRoutes/index.js'));


// Make sure this is right at the end of your server logic!
// The only thing after this might be a piece of middleware to serve up 500 errors for server problems
// (However, if you have middleware to serve up 404s, that would go before this as well)
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../index.html'));
  });


app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

const port = 3000; // or any other port you want to use
app.listen(port, async() => {
  console.log(`Server is running on port ${port}`);
  await db.sync({force:true});
  console.log('connected');
});

