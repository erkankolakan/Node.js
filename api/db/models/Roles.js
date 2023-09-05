// burada veri tabanının tablosunu modelini oluşturacağımız için burada mongoose kullanmamız gerekir.

const mongoose = require("mongoose")

// şema oluştururuyoruz

const schema = mongoose.Schema({
    // id değeri mongoosenin bize otomatik olarak tanımlar buraya şemamızı oluşturuyoruz.
    role_name:{type:String, required:true},
    is_active:{type:Boolean, default:true}, //yani bir rol tanımlandığında active alanı hep aktif olarak gelsin. özelliklede bir atama yapılmadıysa. 
    created_by:{ 
        type:mongoose.SchemaTypes.ObjectId,
        required:true //yani created_by alanı dolu olmadan bu schema ya birşey kayıt edemezsin.
    }



},{ 
    versionKey:false, //bu şu demek mongoosda bir kayıt yaptığımızda versionKey alanı otomatik bir şekilde oluşuyor, biz bu alanın olmasını istemiyoruz. timestamps da default olarak false geliyor false olsaydı createdAt ve updateAt gelmeyecekti o yüzden tanımlamamız gerekiyor 



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

class Roles extends mongoose.Model{
    //veri kaydederken buraları dolduracağız.
}


    schema.loadClass(Roles);
    module.exports = mongoose.model("users" , schema)