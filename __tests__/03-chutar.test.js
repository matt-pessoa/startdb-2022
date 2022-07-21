const Forca = require('../desafio/forca');

describe('Quando a função chutar for chamada', () => {
  describe('incorretamente', () => {
    const palavraSecreta = 'amora';
    const jogoForca = new Forca(palavraSecreta);

    describe('o length do parâmetro é maior que 1', () => {
      const errorMessageLength = 'O chute deve ser de apenas uma letra!';

      it('deve retornar uma mensagem de erro', () => {
        expect(jogoForca.chutar(palavraSecreta)).toBe(errorMessageLength);
      });
    });

    describe('a letra já foi chutada', () => {
      const letraChutada = 'a';
      const errorMessageDuplicate = `A letra ${letraChutada} já foi chutada!`;

      it('deve retorar um erro', () => {
        jogoForca.chutar(letraChutada);
        expect(jogoForca.letrasChutadas).toContain(letraChutada);
        expect(jogoForca.chutar(letraChutada)).toBe(errorMessageDuplicate);
      });
    });
  });

  describe('corretamente', () => {
    const caminhoFeliz = ['a', 'm', 'o', 'r'];
    const caminhoTriste = ['c', 'e', 'b', 'o', 'l', 'a', 's'];

    describe('caminho feliz', () => {
      const palavraSecreta = 'amora';
      const jogoForca = new Forca(palavraSecreta);

      it('Após um chute, o número de vidas deve ser 5', () => {
        jogoForca.chutar(caminhoFeliz[0]);
        expect(jogoForca.vidas).toBe(5);
      });
    });
  });
});
