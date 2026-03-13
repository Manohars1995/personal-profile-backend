const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({

  username: String,

  password: String,

  introduction: {

    type: String,

    default:
      "DevOps Cloud Engineer with 1.5 years of experience in AWS, Docker, Kubernetes, CI/CD, Infrastructure Automation and Cloud Security."

  },

  profilePic: String,

  coverImage: String,

  resume: String

})

module.exports = mongoose.model("User", userSchema)