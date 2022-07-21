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
});
