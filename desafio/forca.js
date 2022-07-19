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
      console.log('\nO chute deve ser de apenas uma letra!\n');
      return '';
    }

    if (this.letrasChutadas.includes(letra)) {
      console.log(`\nA letra ${letra} já foi chutada!\n`);
      return '';
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
        .split('')
        .map((elm, idx) => (elm === letra ? idx : ''))
        .filter((elm) => typeof elm === 'number');
      indexes.forEach((elm) => (this.palavra[elm] = letra));
    }
  }

  buscarEstado() {
    return '';
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
