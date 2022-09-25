const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const accountSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: 3,
    unique: true,
  },
  passwordHash: {
    type: String,
    required: true,
  },
});

accountSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString();
      delete returnedObject._id;
      delete returnedObject.__v;
      delete returnedObject.passwordHash;
    },
  });
  
  accountSchema.plugin(uniqueValidator);
  
  module.exports = mongoose.model('Account', accountSchema);