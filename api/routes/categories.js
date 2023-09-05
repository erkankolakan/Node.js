var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {  
//   res.send('respond with a resource');    //res ile get isteği gelirse bu cevabı ver demiş oluyoruz

    res.json({succes:true});

});

module.exports = router;  //export etmezse bu dosyaya ulaşamayacağı için hata alırız 



