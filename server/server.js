const express = require('express');
const app = express();

const pieChartData = require('./pie-chart.json');

app.get('/data/pie-chart', function (req, res) {
  res.send(pieChartData);
});

app.listen(3000, function () {
  console.log('App listening on port 3000!');
});
