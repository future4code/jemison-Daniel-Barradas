import styled from 'styled-components'


// -------- EXPLICACAO DE COMO CONVERTER O CSS EM STYLED ----------

// Css que convertemos => App.css

export const MainContainer = styled.div`
    display: flex;
    position: fixed;
    flex-direction: column;
    align-items: center;
    background-color: orange;
    width: 100vw;
    height: 100vh;
`
export const Centro = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    width: 70vw;
    height: 100vh;
`

export const Texto1 = styled.div`
    display: flex;
    justify-content: center;
    div{
        display: flex;
        background-color: white;
        padding: 0vh 1vh;
        margin: 1.5vh 4vh;
        p {
            margin: 1vh;
        }
    }
`
export const Formulario = styled.div`
    display: flex;
    gap: 30px;
    position: absolute;
    bottom: 10vh;
`
export const FormularioTexto = styled.div`
    display: flex;
`
export const FooterPag = styled.div`
    display: flex;
    position: fixed;
    background-color:gray;
    width: 100vw;
    height: 5vh;
    flex-direction: column;
    align-items: center;
    text-align: center;
    bottom: 0px;
`
/* export const ContainerPai = styled.div`
    background-color: red;
`
export const H1Estilizado = styled.h1`
    color: antiquewhite;
`
export const H2Estilizado = styled.h2 `
    color: aquamarine;
` */


// ------ EX1----------------------

// Podemos fazer assim usando o App e um arquivo de estilização
// Porém, para aplicações mais complexas e maiores, é melhor componentizar o projeto
// Para componentizar, siga os seguintes passos :
// 1. Crie uma pasta components
// 2. Dentro dessa pasta components, crie uma pasta para cada componente 
// 3. Dentro da pasta de cada componente, faça um arquivo de lógica e um arquivo para estilização
// 4. Chame esse componente para ser renderizado no App.js


/* export const DivPai = styled.div `
    background-color: lightgrey;
    width: 100vw;
    height: 80vh;
    display: flex;
    align-items:center;
    justify-content: center;

`
export const Span1 = styled.span`
    background-color: lightcoral;
    height: 20vh;
    margin-right:20px;
`
export const Span2 = styled.span`
    background-color: lightyellow;
    height: 20vh;
`
*/

// ----- EX 2 

/* export const Footer = styled.div `
    background-color:#333b3e;
    position: fixed;
    bottom:0;
    height: 10vh;
    width: 100%;
    display: flex;
    padding:0 10px;
    color:white;
`

export const FooterTop = styled.footer`
    color: white;
`
*/

//------ Exercicio 3

/* export const HeaderEstilizado = styled.header `
    background-color: orange;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 50px;
    height: 10%;
`
export const Logo = styled.p `
    color: white;
` */


