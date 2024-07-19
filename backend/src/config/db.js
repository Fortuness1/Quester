require('dotenv').config({ path: '../backend/.env' });
const { MongoClient } = require('mongodb');
const client = new MongoClient(process.env.MONGO_DB_URI);

const DataBase = {
    connectToDatabase: async () => {
        try {
            await client.connect().then(() => {
                console.log('Conectado ao MongoDB!');
            });     
        } catch (error) {
            console.error('Erro ao conectar ao MongoDB:', error);
        }
    },
    findUser: async (email, passoword) => {
        try {
            this.connectToDatabase;
            const result = await client.db('quester').collection('users_quester').findOne({email: email, password: passoword});
            console.log(`achou ${JSON.stringify(result)} db.js`);
            return result;
        }catch (error) {
            console.error(`Usuario: ${email}`, error);
        }
    },

    insertUser: async (email, passoword) => {
        try {
            this.connectToDatabase;
            const result = await client.db('quester').collection('users_quester').insertOne({email: email, password: passoword});
            console.log(`achou ${JSON.stringify(result)} db.js`);
            return result;
        }catch (error) {
            console.error(`Usuario: ${email}`, error);
        }
    },

    deleteUserDB: async (email, password) => {
        try {
            this.connectToDatabase;
            const result = await client.db('Userlog').collection("Users").deleteOne({email: email, password: password})
        }catch (error) {
            console.error(`Usuario: ${email}`, error);
        }
    }
}

DataBase.connectToDatabase();

module.exports = DataBase;