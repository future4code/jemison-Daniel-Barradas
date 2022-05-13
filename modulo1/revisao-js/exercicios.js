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
  let maior=0
  for(let numero of array){
    if(maior<numero){
      maior=numero
    }
  }
  return maior
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  function divisibilidade (primeiro,segundo) {
    if (primeiro>segundo) {
        return primeiro%segundo==0
    } else if (primeiro<segundo) {
        return segundo%primeiro==0
    } else if (primeiro==segundo) {
        return true
    }
}
function subtracao (primeiro,segundo) {
    if(primeiro>segundo) {
        return primeiro-segundo
    } else if (primeiro<segundo) {
        return segundo-primeiro
    } else if (primeiro==segundo) {
        return 0
    }
}
const arrayNumeros = [num1,num2]
const Objeto = {
    maiorNumero : retornaMaiorNumero(arrayNumeros),
    maiorDivisivelPorMenor : divisibilidade(num1, num2),
    diferenca : subtracao(num1,num2)
}
return Objeto
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
  let numerosPares = [];
  for (let i = 0; numerosPares.length < n; i++) {
      if (i % 2 == 0) {
          numerosPares.push(i)
      }
  }
  return numerosPares;
}


// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
  let trianguloEs="Escaleno"
  let trianguloEq="Equilátero"
  let trianguloIs="Isósceles"
   if (ladoA==ladoB && ladoB==ladoC){
     return trianguloEq
   } else if(ladoA!=ladoB && ladoA!=ladoC && ladoB!=ladoC){
     return trianguloEs
   } else{
     return trianguloIs
   }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  let arrayOrdenado = retornaArrayOrdenado(array)
  let segundoMaior = arrayOrdenado[arrayOrdenado.length-2]
  let segundoMenor = arrayOrdenado[1]
  return [segundoMaior,segundoMenor]
  }

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
  let chamada=`Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
  return chamada
  }

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
  const anonimo={...pessoa}
  anonimo.nome="ANÔNIMO"
  return anonimo
}

// EXERCÍCIO 13A

function retornaPessoasAutorizadas(pessoas) {
  const autorizadas=pessoas.filter((item,index,array)=>{
    if(item.altura>1.5 && item.idade>14 && item.idade<60){
    return item
   }
  })
  return autorizadas
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  const naoAutorizadas=pessoas.filter((item,index,array)=>{
    if(item.altura<1.5 || item.idade<=14 || item.idade>=60){
    return item
   }
  })
  return naoAutorizadas
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