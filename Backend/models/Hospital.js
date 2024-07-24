const mongoose = require('mongoose');

const HospitalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  speciality: {
    type: [String],
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  description: {
    type: String
  },
  images: {
    type: [String]
  },
  numberOfDoctors: {
    type: Number
  },
  numberOfDepartments: {
    type: Number
  }
});

const HospitalModel = mongoose.model('Hospital', HospitalSchema);
module.exports = HospitalModel
