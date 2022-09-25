const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const memberSchema = new mongoose.Schema({

  firstname: {
    type: String,
    required: true,
  },
  lastname:{
    type: String,
    required: true,
  },
  phone:{
    type: String,
    required: true,
    unique: true,
  },
  address:{
    type : String,
    required:true,
  },
});

memberSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString();
      delete returnedObject._id;
      delete returnedObject.__v;
    },
  });
  
  memberSchema.plugin(uniqueValidator);
  
  module.exports = mongoose.model('Member', memberSchema);