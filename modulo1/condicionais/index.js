/* Exercícios de interpretação de código



Exercício 01

a)O código recebe um número pelo prompt, depois disso o transforma em número (as entradas do prompt são recebidas como strings, portanto não é possível realizar operações com este tipo).
Em seguida, o código testa se o resto da divisão do número recebido por 2 será zero, devolvendo a mensagem "Passou no teste", caso contrário devolve "Não passou no teste". 

b)Para entradas que forem número pares.

c)Para entradas que forem números ímpares.


Exercício 02

a)Para devolver uma mensagem informando o preço da fruta dada como entrada no programa, caso a fruta esteja catalogada na memória do programa.

b)"O preço da fruta Maçã é R$ 2.25"

c)"O preço da fruta Pêra é R$ 5"


Exercício 03

a)Recebendo um número pelo prompt, transformando o tipo de string para número e guardando na variável "numero".

b)Esse número passou no teste. Apareceria uma mensagem de erro, pois a variável "mensagem" não foi declarada como global.

c)Aparece um erro dizendo que a variável mensagem não foi definida, pois a mesma foi declarada apenas dentro do if, sem uma ordem para usá-la
dentro da própria condição ou de outra. Portanto o console.log não pôde acessá-la.

*/

//Exercícios de Escrita de Código


//Exercício 01

//a) e b)

const idade=Number(prompt("Informe a sua idade"));

//c

if(idade>=18){
    console.log("Você pode dirigir")

}else{
    console.log("Você não pode dirigir")

}


//Exercício 02

const turno=prompt("Digite a inicial do seu turno: M (matutino) ou V (Vespertino) ou N (Noturno)").toLowerCase()

if(turno=="m"){
    console.log("Bom dia!")
}else if(turno=="v"){
    console.log("Boa tarde!")
}else if(turno=="n"){
    console.log("Boa noite!")
}


//Exercício 03

const turnoSwitch=prompt("Digite a inicial do seu turno: M (matutino) ou V (Vespertino) ou N (Noturno)").toLowerCase();

switch(turnoSwitch){

    case "m":
        console.log("Bom dia!")
        break
    case "v":
        console.log("Boa tarde!")
        break
    case "n":
        console.log("Boa noite!")

}


//Exercício 04

const genero=prompt("Informe o gênero do filme").toLowerCase();
const preco=prompt("Informe o preço do ingresso");

if((genero=="fantasia") && (preco<=15)){
    console.log("Bom filme!")
}else{
    console.log("Escolha outro filme :(")
}