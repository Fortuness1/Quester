require('dotenv').config({ path: './backend/.env' });
const client = process.env.MONGO_DB_URI;
console.log(client)
const mongoose = require("mongoose");

// const connectToDatabase = async () => {
//   await mongoose.connect(
//     client,
//     (error) => {
//       if (error) {
//         return console.log(
//           "Ocorreu um erro ao se conectar com o banco de dados: ",
//           error
//         );
//       }

//       return console.log("Conexão ao banco de dados realizada com sucesso!");
//     }
//   );
// };

const connectToDatabase = async () => {
  await mongoose.connect(client).then(() => {
    console.log('Conectado ao MongoDB!');
  })
  .catch((error) => {
    console.error('Erro ao conectar ao MongoDB:', error);
  })};

module.exports = connectToDatabase;


