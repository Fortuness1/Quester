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
        console.log(req.body.email)
      const users = await FindUserModel.findOne({email:"dasd@asd"});
      if (users != null) {
        console.log(users);
        return res.status(404).json({ error: 'Usuário não encontrado' });
      }
      console.log(users);
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };