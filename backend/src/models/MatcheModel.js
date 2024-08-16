const mongoose = require("mongoose");;

const matchesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        lowercase: true,
    },
    data: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    name_host: {
        type: String,
        required: true,
    },
    players: {
        type: mongoose.Schema.Types.Mixed,
        default: []
    },
    questions: {
        type: mongoose.Schema.Types.Mixed,
        default: []
    },
    status: {
        type: String,
        uppercase: true,
        default: "WAITING"
    },
    pin: {
        type: Number,
        required: true,
        unique: true
    }
});

const MatchesModel = mongoose.model("Matche", matchesSchema);

module.exports = MatchesModel;