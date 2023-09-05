class CustomError extends Error {
    constructor(code , message , description ){
        // error classının constructorunu super() ile çağırıyoruz
        super(`{"code": "${code}", "message": "${message}"  , "description": "${description}"}`) // `` back tick ile tanımladığımız şeyler abostrof olarka adlandırılır
        
        this.code = code
        this.message = message,
        this.description = description

    }
}

module.exports = CustomError; 