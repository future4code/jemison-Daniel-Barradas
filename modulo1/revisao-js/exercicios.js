// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
 function arrayOrdenada(a,b){
   return a-b;
 }
 return array.sort(arrayOrdenada)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  let arrayDePares=[];
  for(let par of array){
    if(par%2==0){
      arrayDePares.push(par)
    }
  }
  return arrayDePares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  let paresElevados=[]
  for(let elevado of array){
    if(elevado%2==0){
      elevado=elevado*elevado;
      paresElevados.push(elevado)
    }
  }
  return paresElevados
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {

}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {

}


// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {

  }

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {

  }

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {

}

// EXERCÍCIO 13A

function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) { 

  }

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {

}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

 }