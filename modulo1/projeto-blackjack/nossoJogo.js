
console.log("Boas vindas ao jogo de Blackjack!");

   if(confirm("Quer iniciar uma nova rodada?")) {


      const primeiraCarta = comprarCarta(); 
      const usuarioCartaUmTexto=primeiraCarta.texto;
      const usuarioCartaUmValor=primeiraCarta.valor;

      const segundaCarta = comprarCarta(); 
      const usuarioCartaDoisTexto=segundaCarta.texto;
      const usuarioCartaDoisValor=segundaCarta.valor;


      const usuarioPontuacao=(usuarioCartaUmValor+usuarioCartaDoisValor)

      console.log(`Usuário - ${usuarioCartaUmTexto} ${usuarioCartaDoisTexto} - ${usuarioPontuacao}`);




      const primeiraCartaComputador = comprarCarta(); 
      const computadorCartaUmTexto=primeiraCartaComputador.texto;
      const computadorCartaUmValor=primeiraCartaComputador.valor;

      const segundaCartaComputador = comprarCarta(); 
      const computadorCartaDoisTexto=segundaCartaComputador.texto;
      const computadorCartaDoisValor=segundaCartaComputador.valor;

      const computadorPontuacao=(computadorCartaUmValor+computadorCartaDoisValor)

      console.log(`Computador - ${computadorCartaUmTexto} ${computadorCartaDoisTexto} - ${computadorPontuacao}`);


      const perderUm= (usuarioPontuacao>21);
      const perderUmComputador= (computadorPontuacao>21);
      const ganharUmUsuario= (usuarioPontuacao>computadorPontuacao);
      const ganharUmComputador= (computadorPontuacao>usuarioPontuacao);
      const ganharDoisUsuario= (usuarioPontuacao<=21)
      const ganharDoisComputador= (computadorPontuacao<=21)




      if(perderUm && perderUmComputador){
         console.log(`Foi um empate!`)

      }else if(usuarioPontuacao == computadorPontuacao){
         console.log(`Foi um empate!`)
   
      }else if(perderUm && ganharDoisComputador){
         console.log(`Você perdeu!`)

      }else if(ganharDoisComputador && ganharDoisUsuario && ganharUmComputador){
         console.log(`Você perdeu!`)
   
      }else if(perderUmComputador && ganharDoisUsuario){
         console.log(`Você ganhou!`)
   
      }else if(ganharDoisComputador && ganharDoisUsuario && ganharUmUsuario){
         console.log(`Você ganhou!`)

   }

   } else { 


      console.log(`O jogo acabou.`)

   }