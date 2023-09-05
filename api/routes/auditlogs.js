var express = require('express');
var router = express.Router();
//express üzerinden Routerı kullanacağız. 

/* GET users listing. */
router.get('/:id', function(req, res, next) {  
    //get isteği gelirse bu cevabı ver demiş oluyoruz
    res.json({
        body: req.body,
        params: req.params,
        query: req.query,
        headers: req.headers
    }) // burada yaptığımız buraya gelen isteğin içinde barındırdığı body, params, query, header alanlarını response olarak dön demiş olduk. 
});


//queryi localhost:3000?id=12345 şeklinde gönderirsek bizim burada req.query üzerinden bu id yi alabiliriz. Queryi doldurabiliriz.
//paramsı doldurmak çin burda router.get("/:id") şekliden yapıp postmande localhost:3000/auditlogs/123 şekliden girip uzantının sonunda bir id belirlememiz gerekir. Eğer biz uzantının sonunda /:id şeklinde bir değer olmasına rağman gidipte normal bir şekilde uzantının sonunda bir id belirtmezsek hata alırız.
//bodyi doldurmak için postman üzerinden body kısmından raw seçip json seçip oraya bir json objesi yazıp göndermemiz gerekir.
//uzantıya direk link üzerinden istek atarsak header kısmı gelir zaten.





module.exports = router;


//req objesi bize gönderilen isteğin içinde bulunan bilgileri barındırıyor,
//res objesi ise bizim bu req e vereceğimiz cevabı ve fonksiyonları barındırıyor,
//next ise eğer biz bu rooterı yani get isteğini middleware olarka kullanacaksak  yani birden fazla classım varsa burdaki işlemimi bitirdim sonraki routera geç demek için kullanıyoruz.