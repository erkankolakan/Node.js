// burada veri tabanının tablosunu modelini oluşturacağımız için burada mongoose kullanmamız gerekir.

const mongoose = require("mongoose")

// şema oluştururuyoruz

const schema = mongoose.Schema({
    premission:{type: String},
    role_id:{type:String, required:true},
    created_by:{type:mongoose.SchemaTypes.ObjectId, required:true}


},{ 
    versionKey:false,
    timestamps:{
        createdAt:"created_at",
        updatedAt:"updated_at"
    }

})




class RolePrivilegens extends mongoose.Model{
}


    schema.loadClass(RolePrivilegens);
    module.exports = mongoose.model("role_privilegens" , schema)