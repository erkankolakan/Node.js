const Enum = require("../config/Enum");
const CustomeError = require("./Error");





class Response {

    constructor() {}

    static successResponse(data, code=200){ // successResponse code diye bir değer belirtmezsek default olarak değeri 200 olarak gelsin..
        return {
            code,
            data
        }
    }

    static errorResponse(error){

        console.error(error);

        if( error instanceof CustomeError ){
                return{
                    code: error.code,
                    error:{
                        message: error.message,
                        description: error.description
                    }
                }
        }
            return{
                code: Enum.HTTP_CODES.INTERNAL_SERVER_ERROR,
                error:{
                    message: "Unknown Error!",
                    description: error.message
                }
        }
    }
}







module.exports = Response; //response sınıfı dönsün. 









//  nomalde biz bir classı export ettiğimiz zaman classın içindeki değerlere erişmek için her değerin önüne new anahtar kelimesi tanımlamamız lazım ama static fonksiyon kullandığımız zaman new ahantar kelimesiyle bir nesne oluşturmamıza gerek kalmaz. Direk classın referansıyla ulaşabiliriz. yani response.successResponse şeklinde içindeki değerlere ulaşabiliriz. 





