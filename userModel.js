const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  nickname: String,
  firstName: String,
  lastName: String,
  position: String,
  nationality: String,
  telephoneNumber: String,
  startingDate: Date,
  address: String,
  subDistrict: String,
  district: String,
  province: String,
  postalCode: String,
  facebook: String,
  lineId: String,
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