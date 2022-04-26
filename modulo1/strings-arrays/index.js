/*
Exercícios de Interpretação de código

Exercício 01

a. array
b. null
c. 11
d. 3
e. 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13
f. 9

Exercício 02

SUBI NUM ÔNIBUS EM MIRROCOS 27


Exercícios de Escrita de código

Exercício 01

let nomeDoUsuario=prompt("Qual o seu nome?");
let emailDoUsuario=prompt("Qual o seu endereço de e-mail?");
console.log(`O e-mail`, emailDoUsuario, `foi cadastrado com sucesso. Seja bem-vinda(o),`, nomeDoUsuario, `!`)

Exercício 02

let comidasFavoritas=["Pizza", "Lasanha", "Spaghetti de abobrinha", "Mousse de maracujá", "Paella"];
let i=0;

comidasFavoritas[i+1];
console.log(comidasFavoritas);

console.log("Essas são as minhas comidas preferidas: ");
console.log(comidasFavoritas[0]);
console.log(comidasFavoritas[1]);
console.log(comidasFavoritas[2]);
console.log(comidasFavoritas[3]);
console.log(comidasFavoritas[4]);

let comidaEscolhidaPeloUsuario=prompt("Informe sua comida favorita");
comidasFavoritas=["Pizza", comidaEscolhidaPeloUsuario, "Spaghetti de abobrinha", "Mousse de maracujá", "Paella"];
console.log(comidasFavoritas);

Exercício 03

let listaDeTarefas=[];
let primeiraTarefa=prompt("Insira uma tarefa que você precisa fazer hoje");
let segundaTarefa=prompt("Insira mais uma tarefa que você precisa fazer hoje");
let terceiraTarefa=prompt("Insira mais uma última tarefa que você precisa fazer hoje");
listaDeTarefas.push(primeiraTarefa, segundaTarefa, terceiraTarefa);
console.log(listaDeTarefas);
let atividadeConcluída=prompt("Digite o índice da tarefa que já foi realizada");
atividadeConcluída=Number(atividadeConcluída);
listaDeTarefas.splice(atividadeConcluída, 1);
console.log(listaDeTarefas);

*/