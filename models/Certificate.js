const mongoose = require("mongoose")

const certificateSchema = new mongoose.Schema({

  title: String,

  issuer: String,

  file: String,

  date: String

})

module.exports = mongoose.model("Certificate", certificateSchema)