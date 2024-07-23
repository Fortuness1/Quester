const db = require('../config/db');

const User = {
    loginUser: async (email,passoword) => {
        const emailUser = email.toLowerCase();
        const passowordUser = passoword.toLowerCase();
        try{
            const user = await db.findUser(emailUser,passowordUser);
            if(user != null){
                console.log('User logged in');
                return user;
            }else{
                console.log('User not found valor = null playerModels.js');
                return false;
            }
        }catch (error) {
            console.log('User not found catch plyerModels.js');
            console.log(error);
        }
    },
    signIn: async (email, passoword) => {
        const emailUser = email.toLowerCase();
        const passowordUser = passoword.toLowerCase();
        try{
            const user = await db.insertUser(emailUser, passowordUser);
            if(user != null){
                console.log('User logged in');
                return user;
            }else{
                console.log('User not found valor = null playerModels.js');
                return false;
            }
        }catch (error) {
            console.log('User not found catch plyerModels.js');
            console.log(error);
        }
    },
    deleteUser: async (req) => {
        try{
            const user = await db.deleteUserDB(req);
            if(user != null){
                console.log(user);
                return user;
            }
        }catch (error) {
            console.log('User not found catch plyerModels.js');
            console.log(error);
        }
    },
    allUser: async () => {
        try{
            const user = await db.findAll();
            if(user != null){
                console.log(user);
                return user;
            }else {
                console.log('User not found valor = null playerModels.js');
                return false;
            }
        }catch (error) {
            console.log('User not found catch plyerModels.js');
            console.log(error);
        }
    },
};

module.exports = User;