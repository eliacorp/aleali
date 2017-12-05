// Get dependencies
process.env.mode = 'dev';
process.env.public_key= '12789f27-94db-4285-8816-8fe7a7a54144';
process.env.secret_key= '62QCnCqbvwFKoBGfNqbV205rfRjprP0NqXQ8fZ-01Bc-';
const express = require('express');
const path = require('path');
const http = require("http");

const bodyParser = require('body-parser');
const https = require("https");
const ejs = require("ejs");
const routes  = require('./routes');
const prismic  = require('./api/prismic');
const util = require('util');
const sessions = require('client-sessions');
const request = require('request');
const Marketcloud = require('marketcloud-node');
const Product = require('./api/marketcloud/product');
const Cart = require('./api/marketcloud/cart');
const Order = require('./api/marketcloud/order');
const superagent = require('superagent');

const user = require('./api/marketcloud/user');

// Get our API routes
const api = require('./routes/api');
const app = express();


app.engine('html', ejs.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/../dist');
// app.use(function(req, res, next) {
//     if((!req.secure) && (req.get('X-Forwarded-Proto') !== 'https')) {
//         res.redirect('https://' + req.get('Host') + req.url);
//     }
//     else
//         next();
// });
// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Point static path to dist
app.use(express.static(path.join(__dirname, '/../dist')));


// Prismic

app.get('/api/prismic/get/single', function(req, res){
  prismic.getSingle(req, res);
});

app.get('/api/prismic/get/all', function(req, res){
  prismic.getAll(req, res);
});

app.get('/api/prismic/get/type', function(req, res){
  prismic.getType(req, res);
});






//Marketcloud
let marketcloud = new Marketcloud.Client({
                      public_key : process.env.public_key,
                      secret_key : process.env.secret_key
                  });

exports.marketcloud = marketcloud;




















// Catch all other routes and return the index file
// app.get('*', (req, res) => {
//   // res.sendFile(path.join(__dirname, '/../dist/index.html'));
// });
app.get('*', routes.index);

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '8081';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));
