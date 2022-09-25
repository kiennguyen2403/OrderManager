const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const orderSchema = new mongoose.Schema({
  id:{
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: String,
    required: true,
    minlength: 3,
  },
  order: {
    type: String,
    required: true,
  },
  address:{
    type: String,
    required: true,
  }
});

orderSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString();
      delete returnedObject._id;
      delete returnedObject.__v;
    },
  });
  
  
  module.exports = mongoose.model('Order', orderSchema);