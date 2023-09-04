var express = require('express');
var router = express.Router();

const config = require("../config") //index.js diye belirtmesekte otomatik olarak inde.js olarak algılar.

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Kolakan', config  });
});

module.exports = router;
