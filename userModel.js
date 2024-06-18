const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  nickname: String,
  firstname: String,
  lastname: String,
  position: String,
  nationality: String,
  telephonenumber: String,
  startingdate: Date,
  address: String,
  subdistrict: String,
  district: String,
  province: String,
  postalcode: String,
  facebook: String,
  line: String,
  instagram: String,
  education: [{
    year: String,
    institutionName: String
  }],
  experience: [{
    company: String,
    position: String,
    startYear: String,
    endYear: String,
  }],
  skills: [{
    name: String,
    level: Number
  }],
  interests: [String],
  guild: [String]
});

module.exports = mongoose.model('User', userSchema);