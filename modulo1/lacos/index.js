//Exercícios de interpretação de código



//Exercício 01

//Está fazendo uma contagem de i, de um em um, somando e atualizando o valor da variável "valor". Será impresso 10 (0+1+2+3+4=10).



//Exercício 02

//a)19, 21, 23, 25, 27, 30 (um abaixo do outro). 

//b) Sim.
//Uma alternativa seria necessário utilizar um laço for com while como no exemplo abaixo:

/*

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
let j =0
for(numero of lista){
    while(j<lista.length){
        console.log(j)
        j+=1
    }
}

*/


//Exercício 03

/* 

Seria impresso no console:
*
**
***
****

*/




//Exercícios de escrita de código



//Exercício 01


let bichinhos=Number(prompt("Quantos bichinhos você tem?"));
let k=0;
let arrayPets=[];

if (bichinhos==0){
    console.log(`"Que pena! Você pode adotar um pet!"`)

}else{

    while(k<bichinhos){
        let nomePet=prompt("Digite o nome de cada pet");
        arrayPets.push(nomePet);
        k+=1
    }
}
console.log(arrayPets)



//Exercício 02


let arrayOriginal=[10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30];

//a

for(let numero of arrayOriginal){
    console.log(numero)
}

//b

for(let numero of arrayOriginal){
    numero=numero/10
    console.log(numero)
}

//c

let arrayPares=[];

for(let numero of arrayOriginal){
    let resto = numero%2
    if(resto==0){
        arrayPares.push(numero)
    }
}
console.log(arrayPares)

//d

let arrayStrings=[]
let i=0
for (let numero of arrayOriginal){
    let string=`O elemento do índex ${i} é: ${numero}`
    arrayStrings.push(string)
    i+=1
}
console.log(arrayStrings)

//e

let valorMaximo=0;
let valorMinimo=100;

for(numero of arrayOriginal){
    if(numero>valorMaximo){
        valorMaximo=numero
    }
    
    if(numero<valorMinimo){
        valorMinimo=numero
    }
}
console.log(`O maior número é ${valorMaximo} e o menor é ${valorMinimo}`)
