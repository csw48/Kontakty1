var mongoose = require("mongoose");
var uuid = require('uuid');

var uzivatelSchema = new mongoose.Schema({
  _id: {
    type: String,
    index: { unique: true },
    default: uuid.v4
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
