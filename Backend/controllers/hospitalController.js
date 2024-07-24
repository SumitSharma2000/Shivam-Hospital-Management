const HospitalModel = require('../models/Hospital');

const createHospital = async (req, res) => {
  const { name, city, image, speciality, rating } = req.body;
  try {
    const newHospital = new HospitalModel({
      name,
      city,
      image,
      speciality,
      rating,
    });
    const hospital = await newHospital.save(); 
    res.json(hospital);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

const getHospitalsByCity = async (req, res) => {
  try {
    const hospitals = await HospitalModel.find({ city: req.query.city }); 
    res.json(hospitals);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

const deleteHospital = async (req, res) => {
  try {
    await HospitalModel.findByIdAndDelete(req.query.id); 
    res.json({ msg: 'Hospital removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

const updateHospital = async (req, res) => {
  const { rating, image } = req.body;
  try {
    const hospital = await HospitalModel.findByIdAndUpdate(
      req.query.id,
      { rating, image },
      { new: true }
    );
    res.json(hospital);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

const addHospitalDetails = async (req, res) => {
  const { description, images, numberOfDoctors, numberOfDepartments } = req.body;
  try {
    const hospital = await HospitalModel.findByIdAndUpdate(
      req.query.id, 
      { description, images, numberOfDoctors, numberOfDepartments },
      { new: true }
    );
    res.json(hospital);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

module.exports = {
  addHospitalDetails,
  updateHospital,
  deleteHospital,
  createHospital,
  getHospitalsByCity,
}
