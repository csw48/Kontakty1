var mongoose = require("mongoose");

var uzivatelSchema = new mongoose.Schema({
  id: {
       type: mongoose.Schema.Types.ObjectId,
       ref: "User"
    },
    titul: String,
    name: String,
    pozicia: String,
    klapka: Number,
    email: String,
    PC: String,
    IP: String,  
    budova: String
});


module.exports = mongoose.model("uzivatel", uzivatelSchema);
