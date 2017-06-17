const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();



//port number
const port = process.env.PORT|| 8080;

//cors middleware
app.use(cors());

//body parser middleware
app.use(bodyParser.json());



//set static folder
app.use(express.static(path.join(__dirname, 'client')));

//index route
app.get('/',(req, res) => {
  res.send('Invalid Endpoint')
});

//rerouting on the nonspecified routes
app.get('/',(req, res) => {
  res.sendFile(path.join(__dirname, 'client/index.html'));
});


app.listen(port, () => {
  console.log("server on port "+port);
});
