// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  let altura = prompt(Number(`digite um numero`));
  let largura = prompt(Number(`digite outro numero`));
  let area=altura*largura;
  console.log(area)
}

// EXERCÍCIO 02
function imprimeIdade() {
  let anoAtual=prompt(Number(`insira o ano atual`));
  let anoNascimento=prompt(Number(`insira o ano de seu nascimento`));
  let idade=anoAtual-anoNascimento;
  console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  return peso/(altura*altura)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  let nome=prompt(`insira seu nome`);
  let idade=prompt(`insira sua idade`);
  let email=prompt(`insira seu email`);
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  let cor1=prompt(`insira sua cor favorita`);
  let cor2=prompt(`insira outra cor que também seja sua favorita`);
  let cor3=prompt(`insira outra cor que também seja sua favorita`);
  let array=[cor1,cor2,cor3];
  console.log(array)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  return custo/valorIngresso

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  return string1.length==string2.length

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array[array.length-1]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
/*  if (array.length>=3) { 
    array.push(array.shift());
  } else {
    array.unshift(array.pop());
  }
  if (array.length<3) {
    array.push(array.shift());*/
  [array[0], array[array.length-1]] = [array[array.length-1], array[0]];
  return array
  }

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  return string1.toLowerCase() == string2.toLowerCase();
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}