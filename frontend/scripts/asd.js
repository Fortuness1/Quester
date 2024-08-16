// const fs = require('fs');

// // Lê a imagem do arquivo (substitua 'imagem.png' pelo caminho do seu arquivo)
// const imageBuffer = fs.readFileSync("c:/Users/maria/Downloads/Quester_main/frontend/scripts/4645949.png");

// // Agora você pode usar 'imageBuffer' conforme necessário
// console.log(imageBuffer);

const date = new Date();
const dataHoraAtual = date.toLocaleString();
const horaAtual =  date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate()
const cu = horaAtual.toLocaleString();

console.log(`Agora são ${horaAtual} horas.`);

console.log(`Data e hora atual: ${cu}`);

function formatarData() {
    const data = new Date();
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return new Date(data).toLocaleDateString('pt-BR', options);
}
  
  const dataAtual = new Date(); // Obtém a data atual
  const dataFormatada = formatarData();
  console.log(dataFormatada); // 01/01/2021
  