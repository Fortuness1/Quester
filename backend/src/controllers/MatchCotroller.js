const UserModel = require('../models/UserModel');
const MatcheModel = require('../models/MatcheModel');
const WaitingMatchModel = require('../models/WaitingMatch');
const dateTime = require('../utils/dateTime');
const DMYdate = require('../utils/DMYdate');


exports.enterMatch = async (req, res) => {
    try {
        const match = await MatcheModel.findOne({ pin: req.params.pin });
        res.status(200).json({ "status": "find match" });
    } catch (err) {
        if (err.message === "Cannot read properties of null (reading 'matches_created')") {
            console.log(err.message);
            res.status(404).json({ error: 'not find match' })
        } else{
            res.status(500).json({ error: err.message });
        }
    }
};

exports.findMatchesHistory = async (req, res) => {
    try {
        const matchesHistory = await UserModel.findById(req.params.id).select('created_matches').select('participated_matches');
        res.status(200).json({ "created_matches": matchesHistory.created_matches, "participated_matches": matchesHistory.participated_matches });
    } catch (err) {
        if(err.messageFormat === undefined) {
            res.status(404).json({ error: "user not found" });
        } else{
            res.status(500).json({ error: err.message });
        }
    }
};

exports.createMatch = async (req, res) => {
    const data = new Date()
    const dataTime = dateTime(data);
    const DMYdata = DMYdate(data);
    try {
        const User = await UserModel.findById(req.body._id);
        const nome = User.name;
        const questions = [];
        for(let i = 0; i < req.body.questions.length; i++) {
            let teste = false
            for(let j = 0; j < User.questions.length; j++) {
                const questionFor = User.questions[j];
                const idString = questionFor._id.toString();
                if( req.body.questions[i] === idString ) {
                    questions.push(User.questions[j]);
                }
            }
        }
        const matche = await MatcheModel(
            {
                name: req.body.name,
                question_times: req.body.question_times,
                data: DMYdata,
                time: dataTime,
                name_host: nome,
                questions: questions,
                pin: Math.floor(Math.random() * 900000) + 100000
            }
        );
        const match = await UserModel.findByIdAndUpdate(
            req.body._id, { $push: { created_matches: matche }}, { new: true }
        );
        res.status(201).json({ "status": "match created" });	
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


