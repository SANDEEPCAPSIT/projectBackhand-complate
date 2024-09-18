const mongoose = require("mongoose");

// const URI ="mongodb://127.0.0.1:27017/mern_admin";
// mongoose.connect(URI);

// const URI = process.env.MONGODB_URI;
const URI = "mongodb+srv://sandeepsinghss7580:qwertyui2#@test-pro-db.vw4gylo.mongodb.net/mern-admin?retryWrites=true&w=majority&appName=test-pro-db"

const connectDb = async () => {
    try{
        // console.log(URI);
        // await mongoose.connect(URI);
        console.log("connection successful too DB");
    }catch(error) {
        console.error("database connection to  failed");
        process.exit(0);
    }
};

module.exports = connectDb;