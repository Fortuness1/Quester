const Usermodel = require('../models/User');

const loginUser = {
    getUser: async (req, res) => {
        const { email, password } = req.body;
        try{
            const user = await Usermodel.loginUser(email, password);
            console.log(user);
            const test = user ? res.status(201).json(user) : res.status(404).json({message: 'User not found loginuser.js'});
        }catch (error) {
            console.log(error + 'loginuser.js');	
            res.status(500).json({message: error.message});
        }
    }
};

module.exports = loginUser;