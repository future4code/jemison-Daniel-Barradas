import './App.css';
import Perfis from './components/Perfis'

function CardPerfis () {
  return (
    <div className='meu-componente'>
      <h2>Meu Componente</h2>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Perfis/>
      <h1>Astromatch</h1>
      <CardPerfis/>
    </div>
  );
}

export default App;
