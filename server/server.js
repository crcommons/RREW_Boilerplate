require('dotenv').config({ path: '/config/' });
// require('./config/db');

const express = require('express');
const router = require('./router.js');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use('/api', router);
console.log('DIRNAMEEEEEE:', __dirname, __filename);
app.use('/eventsAdmin', express.static(`${__dirname}/../client/public/eventsAdmin`));
app.use('/eventsPublic', express.static(`${__dirname}/../client/public/eventsPublic`));
app.use('/parkingWidget', express.static(`${__dirname}/../client/public/parkingWidget`));

const server = app.listen(3000, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log(`App listening at http://${host}:${port}`);
});
