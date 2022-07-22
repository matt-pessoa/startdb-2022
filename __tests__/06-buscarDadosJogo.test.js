const Forca = require('../desafio/forca');

describe('Quando a função buscarDadosJogo for chamada', () => {
  const palavraSecreta = 'amora';
  const jogoForca = new Forca(palavraSecreta);

  it('deve retornar um objeto', () => {
    expect(typeof jogoForca.buscarDadosDoJogo()).toBe('object');
  });

  it('o objeto retornado deve conter 3 elementos', () => {
    expect(Object.keys(jogoForca.buscarDadosDoJogo())).toHaveLength(3);
  });

  it('o objeto retornado deve conter as chaves "letrasChutadas", "vidas" e "palavra"', () => {
    expect(Object.keys(jogoForca.buscarDadosDoJogo())).toContain(
      'letrasChutadas'
    );
    expect(Object.keys(jogoForca.buscarDadosDoJogo())).toContain('vidas');
    expect(Object.keys(jogoForca.buscarDadosDoJogo())).toContain('palavra');
  });
});
