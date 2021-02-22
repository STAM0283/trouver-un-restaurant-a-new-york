const express = require('express');

const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongo = require('mongodb');
const morgan = require('morgan');
const routerAllRestaurants = require('./routes/allRestaurants');

const PORT = 5000 || process.env.PORT;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('tiny'));
app.use('/allRestaurants', routerAllRestaurants);

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`SERVER WAS LISNED AT PORT : ${PORT}`);
});
