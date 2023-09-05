// burada veri tabanının tablosunu modelini oluşturacağımız için burada mongoose kullanmamız gerekir.

const mongoose = require("mongoose")

// şema oluştururuyoruz

const schema = mongoose.Schema({
    // id değeri mongoosenin bize otomatik olarak tanımlar buraya şemamızı oluşturuyoruz.
    email:{type:String, required:true},
    password:{type:String, required:true},
    is_active:{type:Boolean, required:true},
    first_name:String,
    last_name:String,
    phone_number:String
},{

    /*
    // bu şekilde yazarsam otomatik olarak createdAt ve updateAt değerlerini otomatik olarak şemaya ekler aslında ama biz diğerilerini altçizgi ile yazdığımız için timestamsıda aynı şekilde tanımlamak istiyorum.
    timestamps:true
    */
    timestamps:{
        createdAt:"created_at",
        updatedAt:"updated_at"
    }
    // bu bizim tablomuzda oluşturulan her kayıt için otomatik olarak oluşturulma tarihini ve güncellenme tarihini tutar.
    

})



// bu aslında mongoose.Model classından user adlı classı türetiyorum bu sayede user classı mongoose altındaki Model classının içindeki methotları kullanabiliyor. Bunu bu şekilde yapmamızın sebebide user classına bir scheme ataması yapacağız mongoose bu user classını atadığımız zaman artık hook dediğimiz bir yapıya dönüşüyor ve buraya yazdığımız bazı methotları örneğin save methotunu istediğimiz yerde çağırabiliriz. 

class Users extends mongoose.Model{
    //veri kaydederken buraları dolduracağız.
}


    schema.loadClass(Users);
    module.exports = mongoose.model("users" , schema)