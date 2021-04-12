const { Schema, model, Types } = require("mongoose");
const moment = require('moment');

const ReactionSchema = new Schema({
    reactionID: {
        type: Schema.Types.ObjectId,
        default: new Types.ObjectId(),
    },

    reactionBody: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
    },

    username: {
        type: String,
        required: true,
    },

    createdAt: {
        type: Date,
        default: Date.now,
        get: () => moment().format("MM/DD/YYYY"),
    },
},

);

const ThoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    },

    createdAt: {
        type: Date,
        default: Date.now,
        get: () => moment().format('MM/DD/YYYY')
        
    },

    username: {
        type: String,
        required: true
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



ThoughtSchema.virtual('reactionCount').get(function () {
    return this.reaciton.length;
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;



