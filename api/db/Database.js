// bu dosya bizim connection (bağlantı) umuzu oluşturacak sayfa.

const mongoose = require('mongoose') // veri tabanı bağlantısını yapan kütüphanedir.
let instance = null

class Database {
    constructor() {
        if(!instance){
            this.mongoConnection = null;
            instance = this
        }
    }

    async connect(options) {

        try {
            console.log("DB Connecting...")
            let db = await mongoose.connect(options.CONNECTION_STRING);

            this.mongoConnection = db;
            console.log("DB Conneted")
            
        } catch (error) {
            console.log("DB Connection Error", error)
            process.exit(1); //eğer bağlanamazsa uygulamayı kapatsın 
        }

        //burası bizim veri tabanımıza bağlanmamızı sağlayan kısımdır options üzerinden CONNECTION_STRING çektik.


        

    }
}

module.exports = Database;

//  burada yaptığımız 