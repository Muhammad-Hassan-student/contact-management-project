const mongoose = require('mongoose');

const contactsSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    unique: true,
  },
  phone: {
    type: String,
    require: true,
    unique: true,
  },
  relation: {
    type: String,
    default: 'Personal',
  },
});

module.exports = mongoose.model('contacts', contactsSchema);