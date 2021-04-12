const { Schema, model, Types } = require("mongoose");
const moment = require('moment');

const ThoughtsSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    },

    createdAt: {
        type: Date,
        default: Date.now,
        get: moment().format('MM/DD/YYYY')
        
    },

    username: {
        type: String,
        required: true("Please enter a username!")
    },

    reactions: [ReactionSchema]
},
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false

    }
);



