var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var patient_schema= mongoose.Schema({
   name: String,
   phone: String,
   email: String,
   
});

module.exports = mongoose.model('Patient', patient_schema);