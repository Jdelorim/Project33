const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const uri = "mongodb://localhost/project3"

mongoose.connect(uri).then(
    ()=> {
        console.log("connected to Db");
    },
    err => {
        console.log(`error connecting to db ${err}`);
    }
);

module.exports = mongoose.connection;