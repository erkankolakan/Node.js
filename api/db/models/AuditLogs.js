// burada veri tabanının tablosunu modelini oluşturacağımız için burada mongoose kullanmamız gerekir.

const mongoose = require("mongoose")

// şema oluştururuyoruz

const schema = mongoose.Schema({
    level:String,
    email:String,
    location:String,
    proc_type:String,
    log:String,


},{ 
    versionKey:false,
    timestamps:{
        createdAt:"created_at",
        updatedAt:"updated_at"
    }

})




class AuditLogs extends mongoose.Model{
}


    schema.loadClass(AuditLogs);
    module.exports = mongoose.model("audit_logs" , schema)