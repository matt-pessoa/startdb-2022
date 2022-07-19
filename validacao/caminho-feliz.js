const Forca = require('../desafio/forca');
const validarEtapa = require('./validar-etapa');

const palavraSecreta = 'abacaxi';
const jogoForca = new Forca(palavraSecreta);

let estadosEstaoCorretos = validarEtapa(
  6,
  '_______',
  '',
  'aguardando chute',
  jogoForca
);

console.log(jogoForca.vidas);
['a', 'b', 'c', 'x', 'i'].forEach((letra) => jogoForca.chutar(letra)); // ao rodar o comando de chutes, as vidas são contadas, portanto não é possível que a validação abaixo encontre as 6 vidas inicias (o programa não foi resetado), mas sim a 1 vida restante
console.log(jogoForca.vidas);

estadosEstaoCorretos =
  estadosEstaoCorretos &&
  validarEtapa(6, 'abacaxi', 'abcxi', 'ganhou', jogoForca);

const mensagemFinal =
  estadosEstaoCorretos == true
    ? 'Regras validadas com sucesso'
    : 'Parece que algo está errado, verique suas regras';
console.log(mensagemFinal);
