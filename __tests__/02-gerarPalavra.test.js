const Forca = require('../desafio/forca');

describe('Quando a função gerarPalavra for chamada', () => {
  const palavraSecreta = 'amora';
  const jogoForca = new Forca(palavraSecreta);

  it('deve retornar um array com o número de caracteres de acordo com o tamanho do parâmetro passado', () => {
    expect(jogoForca.gerarPalavra(palavraSecreta)).toHaveLength(
      palavraSecreta.length
    );
  });

  it('todos os elementos do array devem ser _', () => {
    jogoForca.gerarPalavra(palavraSecreta).forEach((caractere) => {
      expect(caractere).toBe('_');
    });
  });
});
