var express = require('express');
var router = express.Router();
const Categories = require("../db/models/Categories") //burada categories modelini import ettik
const Response = require("../lib/Response")
const CustomError = require("../lib/Error")
const Enum = require("../config/Enum") // enum aslında herkesin anlayacağı şekilde hataları tanımlamamızaı sağlar

/*
-CRUD-

* Create -> Bir veriyi veri tabanına yazma

* Read -> Veri tabanından okuma

* Update -> Veri tabanından güncelleme

* Delete -> Veri tabanından silme 
 
*/





/* GET categories listing. */

router.get('/', async(req, res, next) => {  
//   res.send('respond with a resource');    //res ile get isteği gelirse bu cevabı ver demiş oluyoruz


    try {
        let categories = await Categories.find({}) // Burada find komutu sayesinde Categories den veri çekiyoruz. 

        res.json(Response.successResponse(categories)); // Response.successResponseye data yı gönderiyoruz oda bizim bir üstte Categories.find ile çektiğimiz veridir.


    } catch (err ) {
        let errorResponse = Response.errorResponse(err)
        res.status(errorResponse.code).json(Response.errorResponse(err))
    }

});




router.post("/add", async (req  ,res ) => {
    
    let body = req.body; //gelen verinin bodysini alıyoruz.
    
    try {
        if(!body.name) throw new CustomError(Enum.HTTP_CODES.BAD_REQUEST , "Validation Error!" , "name fields must be filled" ) //body name alanı dolu değilse bir tane CustomeError fırlatmasını istedik, fırlattığınıda catch de yakalıyacağız.

        
        // categorynin nesnesini oluşturuyoruz.
            
        let category = new Categories({
            name : body.name , 
            is_active: true,
            created_by : req.user?.id // ? işareti sayesinde eğer req.user varsa req.user.id yi al eğer yoksa null döndür demek. 
        })

        await category.save() //categoryi oluşturdum bunu veri tabanına save et demiş olduk. 

        res.json(Response.successResponse({success: true}));

        
    } catch (err) {
        let errorResponse = Response.errorResponse(err)
        res.status(errorResponse.code).json(errorResponse)
    }
});



router.post("/update" ,async (req , res) => {

    let body = req.body; //update nin  bodysini almış olduk.

    try {

        if(!body._id) throw new CustomError(Enum.HTTP_CODES.BAD_REQUEST , "Validation Error!" , "name field must be filled" )
        
        let updates = {};

        if (body.name) updates.name  = body.name; //bodyden gelen name değeri varsa name değerini güncelle demiş olduk
        if (typeof body.is_active === "boolean") updates.is_active = body.is_active; //bodyden gelen name değeri varsa name değerini güncelle demiş olduk
        //typeof bize hemen ardından gelen değerin tipini döner bize 

        await Categories.updateOne({_id: body._id}, updates)
        // ilk parametde değiiştireceğimiz şey, ikincisi parametre ise yaptığımız değişikler  


        res.json(Response.successResponse({ success: true }))


        

    } catch (err) {
        let errorResponse = Response.errorResponse(err);
        res.status(errorResponse.code).json(errorResponse);
        
    }



})


router.post("/delete", async (req , res) => {
    
    let body = req.body;

    try {
        
        if(!body._id) throw new CustomError(Enum.HTTP_CODES.BAD_REQUEST , "Validation Error!" , "name field must be filled" )


        await Categories.deleteOne({_id: body._id});

        res.json(Response.successResponse({ success: true }))


    } catch (err) {
        let errorResponse = Response.errorResponse(err);
        res.status(errorResponse.code).json(errorResponse);
        
    }


})







module.exports = router;  //export etmezse bu dosyaya ulaşamayacağı için hata alırız



