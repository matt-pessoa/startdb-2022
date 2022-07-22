const Forca = require('../desafio/forca');

describe('Quando a função buscarEstado for chamada', () => {
  describe('e o número de vidas for igual a 0', () => {
    const palavraSecreta = 'amora';
    const jogoForca = new Forca(palavraSecreta);

    const caminhoTriste = ['c', 'e', 'b', 'l', 'i', 's'];

    caminhoTriste.forEach((elm) => jogoForca.chutar(elm));

    it('deve ser retornado "você perdeu"', () => {
      expect(jogoForca.vidas).toBe(0);
      expect(jogoForca.buscarEstado()).toBe('perdeu');
    });
  });
});
