// Had to downgrade helmet to version 2.3.0

const express = require('express');

// 0 - Require Helmet
const helmet = require('helmet');

const app = express();

// 1 - Use middleware to hide 'X-Powered-By: Express' message in request (this knowledge can be exploited by hackers)
app.use(helmet.hidePoweredBy());
// 2 - Use middleware to prevent clickjacking attacks from <frame> or <iframe> manipulation
app.use(helmet.frameguard({ action: 'deny' }));















































module.exports = app;
const api = require('./server.js');
app.use(express.static('public'));
app.disable('strict-transport-security');
app.use('/_api', api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});
