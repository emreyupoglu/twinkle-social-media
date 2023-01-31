const { Schema, model } = require("mongoose");

const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 280,
  },
  createAt: {
    type: Date,
    default: Date.now,
    // get: (date) => 
  }

},
{

});
