// burada veri tabanının tablosunu modelini oluşturacağımız için burada mongoose kullanmamız gerekir.

const mongoose = require("mongoose")

// şema oluştururuyoruz

const schema = mongoose.Schema({
    
    name:{type: String, require:true}, //require:true name değeri olmazsa olmaz bir değer anlamına gelir. 
    is_active:{type: Boolean, default:true},
    created_by:{type:mongoose.SchemaTypes.ObjectId}

},{ 

    versionKey:false,
    timestamps:{
        createdAt:"created_at",
        updatedAt:"updated_at"
    
    }
})




class Categories extends mongoose.Model{
}


    schema.loadClass(Categories);
    module.exports = mongoose.model("categories" , schema)