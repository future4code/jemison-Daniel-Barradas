// Exercícios de interpretação de código
//
//Exercício 01
//
//a)
//10
//50
//
//b)
//Nada pois o console.log serve para imprimir as inofrações e operações no console, sem ela não haveria impressão alguma.
//
//Exercício 02
//
//a) A função primeiramente transforma o texto de entrada do usuário em caracteres minúsculos, seguido de uma verificação para avaliar se este texto possui a palavra cenoura, imprimindo um boolean com true ou false.
//
//b)true, true, true.
//
//
//Exercícios de escrita de código
//
//Exercício 01
/*
const quemSouEu = function(){
    console.log(`Eu sou Daniel, tenho 26 anos, moro no Rio de Janeiro e sou estudante.`)
}
const texto = quemSouEu();
console.log(texto)
*/
/*b)

function informacoes(){
    const nome = prompt("informe seu nome");
    const idade = prompt("informe sua idade");
    const cidade = prompt("informe sua cidade");
    const profissao = prompt("informe sua profissão");
    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro no ${cidade} e sou ${profissao}`);
}
informacoes()

*/
//Exercício 02
/*a)

function soma(){
    const primeiroNumero=Number(prompt("informe um número"));
    const segundoNumero=Number(prompt("informe outro número"));
    const soma = primeiroNumero + segundoNumero
    console.log(soma)
}
soma()

*/
/*b)

function maior(){
    const primeiroNumero=Number(prompt("informe um número"));
    const segundoNumero=Number(prompt("informe outro número"));
    const verificacao = primeiroNumero>segundoNumero
    console.log(verificacao)
}
maior()

*/
/*c)

function par(){
    const numero=Number(prompt("informe um número"));
    const verificacao=(numero%2===0);
    console.log(verificacao)
}
par()

*/
/*d)

function frase(){
    const texto=(prompt("digite uma frase"));
    console.log(texto.length, texto.toUpperCase());
}
frase()

*/
//
/*Exercício 03


const primeiroNumero=Number(prompt("informe um número"));
const segundoNumero=Number(prompt("informe outro número"));
console.log(`Números inseridos: ${primeiroNumero}, ${segundoNumero}`)

function adicao(){
    const soma = primeiroNumero + segundoNumero
    return soma
}
console.log(`Soma: ${adicao()}`);

function diferenca(){
    const subtracao = primeiroNumero - segundoNumero
    return subtracao
}
console.log(`Diferença: ${diferenca()}`);

function multiplicacao(){
    const produto = primeiroNumero * segundoNumero
    return produto
}
console.log(`Multiplicação: ${multiplicacao()}`);

function divisao(){
    const div = primeiroNumero / segundoNumero
    return div
}
console.log(`Divisão: ${divisao()}`);

*/