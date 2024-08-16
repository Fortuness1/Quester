const UserModel = require('../models/userModel');
const FindUserModel = require('../models/findUserModel');

exports.createUser = async (req, res) => {
    try {
        const newUser = new UserModel(req.body);
        await newUser.save()            
        res.status(201).json(newUser._id)
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.findUser = async (req, res) => {
    try {
        const users = await FindUserModel.findOne({email: req.body.email, password: req.body.password});
        if (users == null) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }
        res.status(200).json(users._id);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};