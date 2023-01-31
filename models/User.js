const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
    username: {
            type: String,
            unique: true,
            required: true,
            trimmed: true,
        },
    
    email: {
            type: String,
            unique: true,
            required: true,
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
        // Must match a valid email address (look into Mongoose's matching validation)
        },

    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: "Thoughts",
        },
    ],

    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: "Friends",
        },
    ],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }

);

userSchema.virtual("friendCount").get(function() {
    return this.friends.length;
});

const User = model("User", userSchema);

module.exports = User;