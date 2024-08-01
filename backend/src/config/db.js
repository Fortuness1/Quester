require('dotenv').config({ path: '../backend/.env' });
const { MongoClient } = require('mongodb');
const client = new MongoClient(process.env.MONGO_DB_URI);
const { ObjectId } = require('mongodb');

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
            console.log(`achou ${JSON.stringify(result._id)} db.js`);
            return result._id;
        }catch (error) {
            console.error(`Usuario: ${email}`, error);
        }
    },

    insertUser: async (email, passoword) => {
        try {
            this.connectToDatabase;
            const result = await client.db('quester').collection('users_quester').insertOne({email: email, password: passoword, nome: "João", "coisa_preferida": "nada"});
            console.log(`achou ${JSON.stringify(result)} db.js`);
            return result;
        }catch (error) {
            console.error(`Usuario: ${email}`, error);
        }
    },

    deleteUserDB: async (req) => {
        try {
            var delet = req.body;
            console.log(delet);
            this.connectToDatabase;
            const result = await client.db('quester').collection('users_quester').deleteMany(delet)
            console.log(`${result.deletedCount} documento(s) deletado(s)`);
            return result;
        }catch (error) {
            console.error(`Usuario:`, error);
        }
    },
    findAll: async () => {
        try {
            this.connectToDatabase;
            const result = await client.db('quester').collection('users_quester').find().toArray();
            console.log(`achou ${JSON.stringify(result)} db.js`);
            return result;
        }catch (error) {
            console.error(`Usuario: ${email}`, error);
        }
    },
    findUserById: async (id) => {
        try {
            this.connectToDatabase;
            var ids = id._id;
            const result = await client.db('quester').collection('users_quester').findOne({_id: new ObjectId(id)});
            console.log(id + ids + result);
            return result
        }catch (error) {
            console.error(`Usuario: `, error);
        }
    }
}

DataBase.connectToDatabase();

module.exports = DataBase;