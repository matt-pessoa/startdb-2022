const validarEtapa = (
  vidasEsperadas,
  palavraEsperada,
  letrasChutadasEsperadas,
  estadoEsperado,
  jogoForca
) => {
  const {
    vidas,
    palavra: arrPalavra,
    letrasChutadas: arrLetrasChutadas,
  } = jogoForca.buscarDadosDoJogo();

  const palavra = arrPalavra.join('');
  const letrasChutadas = arrLetrasChutadas.join('');
  const estado = jogoForca.buscarEstado();

  console.log('VIDAS');
  console.log(vidas, vidasEsperadas);
  console.log(vidas === vidasEsperadas);
  console.log('\n----------next----------\n');

  console.log('PALAVRA');
  console.log(palavra, palavraEsperada);
  console.log(palavra === palavraEsperada);
  console.log('\n----------next----------\n');

  console.log('LETRAS');
  console.log(letrasChutadas, letrasChutadasEsperadas);
  console.log(letrasChutadas === letrasChutadasEsperadas);
  console.log('\n----------next----------\n');

  console.log('ESTADO');
  console.log(estado, estadoEsperado);
  console.log(estado === estadoEsperado);
  console.log('\n----------next----------\n');

  return (
    vidas === vidasEsperadas &&
    palavra === palavraEsperada &&
    letrasChutadas === letrasChutadasEsperadas &&
    estado === estadoEsperado
  );
};

module.exports = validarEtapa;
