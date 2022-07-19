const readline = require('readline-sync');
const Forca = require('./forca');

const jogo = new Forca('abacaxi');

while (!['perdeu', 'ganhou'].includes(jogo.buscarEstado())) {
  const chute = readline.question('Aguardando chute: \n');
  jogo.chutar(chute);
  console.log(jogo.mostrarDados()); // ! Para que o caminho-feliz rode com sucesso, foi necessário implementar essa função
}

console.log('você ' + jogo.buscarEstado());
