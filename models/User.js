const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true ("Please enter a username!"),
    trim: true,
  },

  email: {
    type: String,
    unique: true,
    require: true,
    match: [
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Must match an email address!",
    ],
  },

    thoughts: [
        {
        type: Schema.Types.ObjectId,
        ref: 'Thought'
        }
    ],

    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
    

},
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

UserSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

const User = model('User', UserSchema);

module.exports = User;