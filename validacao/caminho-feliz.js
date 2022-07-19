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

console.log(`Número de vidas ANTES dos chutes: ${jogoForca.vidas}`);
['a', 'b', 'c', 'x', 'i'].forEach((letra) => jogoForca.chutar(letra));
console.log(`Número de vidas DEPOIS dos chutes: ${jogoForca.vidas}`);

estadosEstaoCorretos =
  estadosEstaoCorretos &&
  validarEtapa(6, 'abacaxi', 'abcxi', 'ganhou', jogoForca);

const mensagemFinal =
  estadosEstaoCorretos == true
    ? 'Regras validadas com sucesso'
    : 'Parece que algo está errado, verique suas regras';
console.log(mensagemFinal);
