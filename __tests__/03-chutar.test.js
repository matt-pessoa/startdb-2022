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
    const caminhoTriste = ['c', 'e', 'b', 'l', 'i', 's'];

    describe('caminho feliz', () => {
      const palavraSecreta = 'amora';
      const jogoForca = new Forca(palavraSecreta);

      caminhoFeliz.forEach((letra) => jogoForca.chutar(letra));

      it(`O valor das vidas deve ser 6`, () => {
        expect(jogoForca.vidas).toBe(6);
      });

      it(`O array de letras chutadas deve conter as letras ${caminhoFeliz}`, () => {
        jogoForca.letrasChutadas.forEach((letra) => {
          expect(jogoForca.letrasChutadas).toContain(letra);
        });
      });

      it('O array da palavra deve estar completo (não haver nenhum _)', () => {
        jogoForca.palavra.forEach((letra) => {
          expect(letra).not.toBe('_');
        });

        caminhoFeliz.forEach((letra) => {
          expect(jogoForca.palavra).toContain(letra);
        });
      });
    });

    describe('caminho triste', () => {
      const palavraSecreta = 'amora';
      const jogoForca = new Forca(palavraSecreta);

      caminhoTriste.forEach((letra) => jogoForca.chutar(letra));

      it('O valor da vidas deve ser 0', () => {
        expect(jogoForca.vidas).toBe(0);
      });

      it(`O array de letras chutadas deve conter as letras ${caminhoTriste}`, () => {
        jogoForca.letrasChutadas.forEach((letra) => {
          expect(jogoForca.letrasChutadas).toContain(letra);
        });
      });

      it('O array da palavra deve conter apenas _', () => {
        jogoForca.palavra.forEach((letra) => {
          expect(letra).toBe('_');
        });

        caminhoFeliz.forEach((letra) => {
          expect(jogoForca.palavra).not.toContain(letra);
        });
      });
    });
  });
});
