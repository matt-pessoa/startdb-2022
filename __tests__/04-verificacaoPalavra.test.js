const Forca = require('../desafio/forca');

describe('Quando a função gerarPalavra for chamada', () => {
  describe('e a palavra a ser adivinhada contém a letra chutada', () => {
    const letraChutada = 'a';
    const jogoForca = new Forca(letraChutada);

    jogoForca.chutar(letraChutada);

    it(`a letra "${letraChutada}" deve ser inserida no array letrasChutadas`, () => {
      expect(jogoForca.letrasChutadas).toContain(letraChutada);
    });

    it('O array palavra deve conter a letra chutada em sua posição', () => {
      expect(jogoForca.palavra).toContain(letraChutada);
      expect(jogoForca.palavra[0]).toBe(letraChutada);
    });
  });
});
