class Forca {
  constructor(param) {
    this.letrasChutadas = []; // array inicial para armazenar as letras
    this.vidas = 6; // quantidade inicial de vidas
    this.palavra = param;
  }

  chutar(letra) {
    if (letra.length > 1) {
      console.log('\nO chute deve ser de apenas uma letra!\n');
    }
    this.vidas -= 1;
    this.letrasChutadas.push(letra);
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
