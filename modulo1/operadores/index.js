/*
Exercícios de Interpretação de código

Exercício 01

a. false
b. false
c. false(
d. boolean

Exercício 02

Quando perguntamos ao usuário alguma informação em JavaScript, o computador registra a mesma como uma string, ou seja um texto. Portanto a operação aritmética reproduz uma concatenação, unindo sequencialmente os dois números, ao invés de informar o resultado da soma aritmética.

Exercício 03

Uma possível solução seria transformar a informação recebida do usuário em um número, utilizando a função Number().
Por exemplo:

primeiroNumero=Number(primeiroNumero);
segundoNumero=Number(segundoNumero);

Após as variáveis serem transformadas para o tipo número, pode-se prosseguir com a operação normalmente.


Exercicio de  Ecrita de Codigo

Exercício 01:

let idade = prompt("Qual sua idade?");
idade=Number(idade);

let idadeMelhorAmigo = prompt("Qual a idade do seu melhor amigo?");
idadeMelhorAmigo=Number(idadeMelhorAmigo);

console.log(idade,idadeMelhorAmigo);

let resultado = (idade>idadeMelhorAmigo);
console.log ("Sua idade é maior do que a do seu melhor amigo?", resultado);
console.log (idade-idadeMelhorAmigo)

Exercício 02:

let numeroPar = prompt("Insira um número par");
numeroPar=Number(numeroPar);

console.log(numeroPar%2);

Ao dividir por 2, os números pares retornam 0 no resto da divisão.
Ao dividir por 2, os números ímpares retornam 1 no resto da divisão.

Exercício 03:

let idade=prompt("Quantos anos você tem?");
idade=Number(idade);
let idadeEmMeses = idade*12;
let idadeEmDias = idade*365;
let idadeEmHoras = idade*8760;
console.log(idadeEmMeses, idadeEmDias, idadeEmHoras);

Exercício 04:

let primeiroNumero=prompt("Digite um número");
primeiroNumero=Number(primeiroNumero);
let segundoNumero=prompt("Digite mais um número");
segundoNumero=Number(segundoNumero);

let maior=(primeiroNumero>segundoNumero);
let igual=(primeiroNumero==segundoNumero);
let divisao=(primeiroNumero%segundoNumero==0);
let divisaoSegundoNumero=(segundoNumero%primeiroNumero==0);

console.log("O primeiro numero é maior que segundo?", maior);
console.log("O primeiro numero é igual ao segundo?", igual);
console.log("O primeiro numero é divisível pelo segundo?", divisao);
console.log("O segundo numero é divisível pelo primeiro?", divisaoSegundoNumero);

*/