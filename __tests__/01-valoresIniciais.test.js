const Forca = require('../desafio/forca');

describe('Verifica os dados iniciais', () => {
  const palavraSecreta = 'amora';
  const jogoForca = new Forca(palavraSecreta);

  it('A letrasChutadas deve ser um array vazio', () => {
    expect(jogoForca.letrasChutadas).toHaveLength(0);
  });
});
