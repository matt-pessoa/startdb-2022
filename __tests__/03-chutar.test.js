const Forca = require('../desafio/forca');

describe('Quando a função chutar for chamada', () => {
  const palavraSecreta = 'amora';
  const jogoForca = new Forca(palavraSecreta);

  describe('incorretamente', () => {
    it('o length do parâmetro é maior que um, deve retornar uma mensagem de erro', () => {
      expect(jogoForca.chutar(palavraSecreta)).toBe(
        'O chute deve ser de apenas uma letra!'
      );
    });
  });
});
