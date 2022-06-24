import imagem from './imagem.png';
import './App.css';

function App() {
  const darBoaNoite=()=>{
    alert('Boa noite!')
  }
  return (
    <div className="App">
      <body className="corpo">
        <h1>Olá! Eu sou o Daniel Barradas!</h1>
        <img src={imagem} className="fotoPerfil" alt="foto" />
        <p>
          Este é o meu primeiro projeto em React!
        </p>
        <button onClick={darBoaNoite}> Clique Aqui! </button>
      </body>
    </div>
  );
}

export default App;
