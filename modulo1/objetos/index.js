/*Exercícios de Interpretação de Código


Exercício 01

a)Será impresso no console:

Matheus Nachtergaele
Virginia Cavendish
canal: "Globo"
horario: "14h"


Exercício 02

a)Será impresso no console:

nome: "Juca", 
idade: 3, 
raca: "SRD"

nome: "Juba", 
idade: 3, 
raca: "SRD"

nome: "Jubo", 
idade: 3, 
raca: "SRD"

b)É uma sintaxe de espalhamento, que permite copiar o objeto cujo vem após a sintaxe.


Exercício 03

a)Será impresso no console:

false
Undefined

b)Porque não foi definida uma propriedade chamada "altura" no objeto pessoa.



Exercícios de Escrita de Código

*/
/*
Exercício 01

a)*/

const pessoa = {
    nome: "Daniel Barradas", 
    apelidos: ["Dan", "Dani", "Barradas"]
}
function chamada(input){
    const pessoa = input;
    console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`)
}
chamada(pessoa)

//b)

const novosApelidos = {...pessoa, apelidos: ["Dan Dan", "Niel", "/das"]
}

chamada(novosApelidos)


//Eexercício 02

//b)

const pessoaUm = {
    nome: "Daniel", 
    idade: 26,
    profissao: "estudante"
}

const pessoaDois = {
    nome: "Edson", 
    idade: 31,
    profissao: "estudante"
}

function formaArray(entrada){
    const pessoaUm=entrada;
    const arr = [pessoaUm.nome , pessoaUm.nome.length , pessoaUm.idade , pessoaUm.profissao , pessoaUm.profissao.length];
    console.log(arr)
}
formaArray(pessoaUm)


//Exercício 03

//a)

let carrinho = [];

//b

const melao = {
    nome: "Melão", 
    disponibilidade: true
}

const abacaxi = {
    nome: "Abacaxi", 
    disponibilidade: true
}

const uva = {
    nome: "Uva", 
    disponibilidade: true
}

//c)

function formaCarrinho(objeto){
    carrinho.push(objeto)
}
formaCarrinho(melao);
formaCarrinho(abacaxi);
formaCarrinho(uva);

//b

console.log(carrinho)