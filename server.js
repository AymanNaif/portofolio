'use strict';
const express = require('express');
const server = express();

const PORT =  process.env.PORT || 3050;

server.listen(PORT, () => {
  console.log('listing to the Port number: ' + PORT);
});

server.get('/', (req, res) => {
  res.send('hello World')
})

server.get('/test', (req, res) => {
  res.send('this is work well the test is sucsess')
})

server.get('/data', (req, res) => {
  res.send('here is the data page !! ')
})
