/*

Exercícios de interpretação de código




Exercício 01

a)Serão impressos 3 vezes: cada item, índice deste objeto na array e todas as arrays.



Exercício 02

a)Um novo array apenas com os itens "nome".



Exercício 03

a)Uma nova array contendo apenas os itens que não tiverem como apelido a string "Chijo".




Exercícios de escrita de código




Exercício 01
*/

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]


//a
 const arrayNomes = pets.map((item, index, array) => {
    return item.nome
 })
 


 //b
 const arrayHotDog = pets.filter((item, index, array) =>{
     return item.raca === "Salsicha"
 }
 )


//c
 const arrayPoodle = pets.filter((item, index, array) =>{
     return item.raca === "Poodle"
 })

 const arrayDesconto = arrayPoodle.map((item,index,array)=>{
     console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!`)
 })



//Exercício 02

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]


 //a
const produtosNomes = produtos.map((item,index,array)=>{
    return item.nome
})


//b
const produtosDesconto = produtos.map((item,index,array)=>{
    let novoPreco=(item.preco*(0.95));
    item.preco=novoPreco
    return item.nome && item.preco
})


//c
const bebidas = produtos.filter((item,index,array)=>{
    return item.categoria==="Bebidas"
})


//d
const produtosYpe = produtos.filter((item,index,array)=>{
    return item.nome.includes("Ypê")
})


//e
const chamadaYpe = produtosYpe.map((item,index,array)=>{
    let string = (`Compre ${item.nome} por ${item.preco}`);
    return string
})




//Desafios



const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]

//1

//a Encontrei duas maneiras de fazer:

//Primeira:
let pokemonsOrdenados=pokemons.sort(function(a,b){
    if(a.nome < b.nome) { return -1; }
    if(a.nome > b.nome) { return 1; }
    else { return 0 }
})
console.log(pokemonsOrdenados)

//Segunda(minha preferida, pois enxugou o código, deixando implícita a comparação de valores positivos, negativos e de igualdade):
let ordenarPokemons=(x, y)=>{
    return x.nome.localeCompare(y.nome);
}
let sorteio = pokemons.sort(ordenarPokemons);
console.log(sorteio);


//b

let arrayTipos=pokemons.map((item,index,array)=>{
    return item.tipo
})
console.log(arrayTipos)