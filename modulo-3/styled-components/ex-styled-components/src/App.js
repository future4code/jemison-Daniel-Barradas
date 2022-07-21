import React from 'react';
import Texto from './components/Texto';
import { MainContainer, Formulario, FormularioTexto, FooterPag, Centro } from './style';
import { useState } from 'react';


function App() {

  const [arrayConversa, setArrayConversa]=useState([
    {nome:"Bot", texto:"Bora conversar?"}
  ]);
  const [inputNome, setInputNome]=useState("");
  const [inputTexto, setInputTexto]=useState("");

  const retornaMsg = arrayConversa.map((item)=>{
    return (
      <Texto nome={item.nome}
      texto={item.texto}
      />
    )
  })

  const recebeNome=(event)=>{
    setInputNome(event.target.value)
  }
  const recebeTexto=(event)=>{
    setInputTexto(event.target.value)
  }

  const fazEnvio=(e)=>{
    e.preventDefault()
    const textoAtualizado=[...arrayConversa,{nome:inputNome,texto:inputTexto}]
    setArrayConversa(textoAtualizado)
    console.log("Mensagem Enviada")
    setInputNome("")
    setInputTexto("")
  }

  return(
        <MainContainer>
          <Centro>
          {retornaMsg}
          <Formulario action=''>
            <input type='text' required placeholder='Nome' value={inputNome} onChange={recebeNome}></input>
            <FormularioTexto>
              <input type='text' required placeholder='Texto' value={inputTexto} onChange={recebeTexto}></input>
            </FormularioTexto>
            <button onClick={fazEnvio}>Enviar</button>
          </Formulario>
          </Centro>
          <FooterPag>Copyright © Daniel Barradas All rights reserved. R Dr. Feliciano Sodré 35</FooterPag>
          </MainContainer>

  )
  
  }
  
  export default App;
