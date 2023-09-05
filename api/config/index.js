module.exports = {
    "PORT": process.env.PORT || "3000",
    "LOG_LEVEL" : process.env.LOG_LEVEL || "debug",
    "CONNECTION_STRING" : process.env.CONNECTION_STRING || "mongodb://localhost:27017/berberim"  //burası bizim data basemize bağlanmamız için gerekli ulan uzantı

}


//aslında environment den bu deri tabanının uzantısını alıyoruz daba sonra da wwwdan bunu çekiyoruz ordanda Datebase sayfasından veri tabanına bağlanıyoruz. 


// module.exports bu dosyanın import edilebilir olduğunu gösterir. 
// bir tane "LOG_LEVEL" değeri var ben configi import ettiğim zaman bu bana gelsin, bunu module.exports ile sağladık. env den LOG_LEVEL ı oku eğer LOG_LEVEL yoksa bunu debug olarak geri döndür.
//ama böyle bir iki tane veri oolsa sıkıntı değil ama zaman zaman yüzlerce bu şekilde veri yollayacağımız için bu yorucu olur. Biz direk bu bilgileri bir dosyaya yazarak kola bir şekilde gönderebiliriz. bunun için bizim DOTENV paketini indirmemiz gerekir.
//





























