if(process.env.NODE_ENV != "production")
  require('dotenv').config()

// productionda değilsen .env dosyasını kullan, productiondaysan kullanma çünkü farklı bir şekilde set edeceğiz.
// NODE_ENV parametresi express.js in bize sunmuş olduğu bir parametre bu parametre iki tande değer alıyor default olarak devolenment değerindedir birde production değerindedir. Express.Js env değerini okuyarak kendi log seviyesinin debugdamı yoksa infodamı olmasına karar veriyor birde son kullanıcıya hata sayfasının stacğini göstermeyi engelliyor. 


var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var app = express();

// console.log("ENV",process.env) // bu bizim işletim sistemimize kayıtlı tüm envimontları görmemizi sağlar ama bizim de kendii değişkenlerimizi tanımlamamız gerekir


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'))); 


//middleware uygulamamız bir istek aldığında bazı aşamalardan geçiyor, ilk önde middleware ye uğruyor daha sonra da routersa uğruyor.
// app.use((req,res,next) => {
//   console.log("ben app.js de çalışan bir middleware'im")
//   next() //bir soraki işleme geç demek. yani app.use('/' indexRouter) işlemine geçicek oda ztn hemen bunun altında.
// })
//app ile tanımlanana fonksiyonlar middleware öğelerdir.

// app.use('/', require('./routes/index'));   // https://localhost:3000/ bu şekilde bir request geldiği zaman beni indexRouter a gönder. 
// app.use('/users',require('./routes/users'));   // https://localhost:3000/user bu şekilde bir request geldiği zamanda beni usersRouter a gönder. Bunlarda hemen yukarda tanımlanmış
// app.use('/auditlogs', require('./routes/auditlogs'));   // https://localhost:3000/auditlogs !! auditlogse gelen istekleri buraya yönlendir demiş olduk. 
// app.use('/categories', require('./routes/categories'));   // https://localhost:3000/categories !! categories gelen istekleri buraya yönlendir demiş olduk. 


// Bunun için app e gidiyoruz ve üsteki gibi tek tek yapmak yerine 





app.use((req , res , next) => {
  console.log("ben app.js de çalışan bir middleware'im")
  next()
})


app.use('/api', require('./routes/index'));   


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
