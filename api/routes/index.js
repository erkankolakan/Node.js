var express = require('express');
var router = express.Router();

const fs = require("fs");
//otomatik router işlemlerini yapmak için ilk önce fs kütüphanesini kullanıyoruz. Bu kütüphane ile dosya işlemlerini yapabiliyoruz. 


let routes = fs.readdirSync(__dirname) // __dirname bulunduğu pathin konumunu verir
//burada sana vereceğim değer vericem bunu senkronize şekilde oku demek. Yani bu işlem bitmeden alt satıra geçme. ./ diyerekte bu klasörğ okumasını sağlarız.
// Okuyacağı klasörde okumasını istemediğimiz dosyalar olabilir txt dosyası gibi img dosyası gibi bunları elemine etmek için for döngüsü kurmak gerekir.

  for(let route of routes){ //burada routes içinde tek tek gez, gezerken üstünde olduğun eleman router değerine atansın, yani router ilk başta 0. index olucak daha sonra 1. index değerini alacak
    if(route.includes(".js") && route != "index.js"  ){// gelen route değerinin string bir değer bu değeri oku içinde .js var mı demek. Okumasını includes sayesinde yaptık.
      router.use("/"+route.replace(".js", ""), require('./'+route)) //gelen dosya isimlerinde .js yazdığı için yönlendire yanlış olacaktı bizde o yüzden replace ile .js kısmını sildik. 
    } 
  }


module.exports = router;


// const config = require("../config") //index.js diye belirtmesekte otomatik olarak inde.js olarak algılar.
// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Kolakan', config  });
// });
//otomatik bir şekilde rouuter oluşturacağımız için üstekini siliyoruz bu sayede localhost:3000/ safasına gidildiği zaman ana sayfa değil notfound sayfası gelecektir.


module.exports = router;
