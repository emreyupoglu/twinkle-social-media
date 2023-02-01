const { Schema, model, Types } = require("mongoose");

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
    //get: (date.toTimeString) => {
     // return 
    }
  },

  username: {
    type: String,
    required: true,
  },

  reactions: [reactionSchema],

},

{
  toJSON: {
    virtuals: true,
    getters: true
  },

});

const reactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },

  reactionBody: {
    type: String,
    required: true,
    maxlength: 280,
  },

  username: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
    // get:
  },
},
  {
  toJSON: {
    virtuals: true,
    getters: true
  },
  }
);

thoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;

});

//thought starts with CAPITAL LETTER?

const thought = model('Thought', thoughtSchema);

module.exports = thought
