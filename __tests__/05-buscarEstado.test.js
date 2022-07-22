const Forca = require('../desafio/forca');

describe('Quando a função buscarEstado for chamada', () => {
  describe('e o número de vidas for igual a 0', () => {
    const palavraSecreta = 'amora';
    const jogoForca = new Forca(palavraSecreta);

    const caminhoTriste = ['c', 'e', 'b', 'l', 'i', 's'];

    caminhoTriste.forEach((elm) => jogoForca.chutar(elm));

    it('deve ser retornado "perdeu"', () => {
      expect(jogoForca.vidas).toBe(0);
      expect(jogoForca.buscarEstado()).toBe('perdeu');
    });
  });

  describe('e o número de vidas for 6 e o array da palavra não conter nenhum _', () => {
    const palavraSecreta = 'amora';
    const jogoForca = new Forca(palavraSecreta);

    const caminhoFeliz = ['a', 'm', 'o', 'r'];

    caminhoFeliz.forEach((elm) => jogoForca.chutar(elm));

    it('deve ser retornado "ganhou"', () => {
      expect(jogoForca.vidas).toBe(6);
      expect(jogoForca.buscarEstado()).toBe('ganhou');
    });
  });
});
