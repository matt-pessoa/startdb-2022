const Forca = require('../desafio/forca');

describe('Verifica os dados iniciais', () => {
  const palavraSecreta = 'amora';
  const jogoForca = new Forca(palavraSecreta);

  it('A letrasChutadas deve ser um array vazio', () => {
    expect(jogoForca.letrasChutadas).toHaveLength(0);
  });

  it('O número inicial de vidas deve ser igual a 6', () => {
    expect(jogoForca.vidas).toBe(6);
  });

  it(`A palavra correta deve ser "${palavraSecreta}"`, () => {
    expect(jogoForca.palavraCorreta).toBe(palavraSecreta);
  });

  describe('Verifica o array da palavra secreta', () => {
    it(`O array de palavras deve conter ${palavraSecreta.length} _`, () => {
      expect(jogoForca.palavra).toHaveLength(palavraSecreta.length);
    });

    it('Todos os elementos do array devem ser _', () => {
      jogoForca.palavra.forEach((caractere) => {
        expect(caractere).toBe('_');
      });
    });
  });
});
