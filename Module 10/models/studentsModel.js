const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentsSchema = new Schema({
  email: String,
  firstName: String,
  lastName: String,
  mobile: String,
  password: String,
  address: String,
  roll: String,
  class: String,
});

module.exports = mongoose.model('Students', studentsSchema);
