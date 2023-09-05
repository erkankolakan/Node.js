var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {  
  res.send('respond with a resource');    //get isteği gelirse bu cevabı ver demiş oluyoruz
});

module.exports = router;
