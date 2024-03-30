const mongoose = require("mongoose");
// -------------- (MongoDb Connection) -------------
const connect = () => {
  return mongoose.connect(
    "mongodb+srv://faizan12:faizan12@cluster0.gckfcz2.mongodb.net/Task"
  );
};

module.exports = connect;
