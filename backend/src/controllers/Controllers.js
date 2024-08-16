const UserModel = require('../models/UserModel');
const BankModel = require('../models/QuestionModel');
const MatchesModel = require('../models/MatcheModel');
const WaitingMatchModel = require('../models/WaitingMatch');

const fs = require('fs/promises');
const path = require('path');
const dateTime = require('../utils/dateTime');
const DMYdate = require('../utils/DMYdate');
const QuestionModel = require('../models/QuestionModel');




exports.deleteCreatedMatches = async (req, res) => {
    try {
        const deleste = await UserModel.findByIdAndUpdate(
            req.params.iduser,
             { $pull: { "created_matches.$._id": req.params.idmache } },
             { new: true }
        );
        res.status(200).json(deleste);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

exports.getWaitingMatches = async (req, res) => {
    try {
        const waitingMatches = await WaitingMatchModel.find({});
        return res.status(200).json(waitingMatches);
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
}







exports.findbyID = async (req, res) => {
    try {
        const users = await UserModel.findById(req.params.id);
        if (users == null) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deletebyID = async (req, res) => {
    try {
        const users = await UserModel.deleteOne({ _id: req.params.id });
        if (users == null) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.findAllUser = async (req, res) => {
    try {
        const Allusers = await UserModel.find({});
       
        res.status(200).json(Allusers);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.findAllQuestions = async (req, res) => {
    try {
        const allQuestions = await QuestionModel.find({});
       
        res.status(200).json(allQuestions);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteAllQuestions = async (req, res) => {
    try {
        const allQuestions = await QuestionModel.deleteMany({});
       
        res.status(200).json(allQuestions);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteALL = async (req, res) => {
    try {
        const deleteALLcaralho = await UserModel.deleteMany({});
       
        res.status(200).json(deleteALLcaralho);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};