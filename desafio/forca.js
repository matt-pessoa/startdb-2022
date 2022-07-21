class Forca {
  constructor(param) {
    this.letrasChutadas = []; // array inicial para armazenar as letras
    this.vidas = 6; // quantidade inicial de vidas
    this.palavraCorreta = param;
    this.palavra = this.gerarPalavra(param);
  }

  gerarPalavra(param) {
    const palavraSecreta = [];
    for (let i = 1; i <= param.length; i += 1) {
      palavraSecreta.push('_');
    }
    return palavraSecreta;
  }

  chutar(letra) {
    if (letra.length > 1) {
      const errorMessageLength = 'O chute deve ser de apenas uma letra!';
      console.log(`\n${errorMessageLength}\n`);

      return errorMessageLength;
    }

    if (this.letrasChutadas.includes(letra)) {
      const errorMessageDuplicate = `A letra ${letra} já foi chutada!`;
      console.log(`\n${errorMessageDuplicate}\n`);

      return errorMessageDuplicate;
    }

    if (!this.letrasChutadas.includes(letra)) {
      this.vidas -= 1;
      this.letrasChutadas.push(letra);
      this.verificacaoPalavra(letra);
    }
  }

  verificacaoPalavra(letra) {
    const palavraCorreta = this.palavraCorreta;

    if (palavraCorreta.includes(letra)) {
      const indexes = palavraCorreta
        .split('') // um array com as letras da palavra a ser adivinhada
        .map((elm, idx) => (elm === letra ? idx : '')) // descobre o index de cada letra na palavra
        .filter((elm) => typeof elm === 'number'); // array com os indexes das letras

      indexes.forEach((elm) => (this.palavra[elm] = letra)); // para cada index da palavra correta, será substituído pela letra chutada no array
    }
  }

  buscarEstado() {
    if (this.vidas === 0) {
      return 'perdeu';
    } else if (this.vidas >= 0 && !this.palavra.includes('_')) {
      // caso haja o caractere _, significa que nem todas as letras foram chutadas corretamente
      this.buscarDadosDoJogo.vidas = 6;

      return 'ganhou';
    } else {
      return 'aguardando chute';
    }
  } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
    const letrasChutadas = this.letrasChutadas;
    const vidas = this.vidas;
    const palavra = this.palavra;

    return {
      letrasChutadas, // Deve conter todas as letras chutadas
      vidas, // Quantidade de vidas restantes
      palavra, // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
    };
  }
}

module.exports = Forca;
