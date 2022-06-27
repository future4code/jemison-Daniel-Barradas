import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import Perfil from './imagem.png';
import LogoPrimeiraExperiencia from './logo-lenny.png'
import LogoSegundaExperiencia from './logo-intnet.png'
import CardPequeno from './components/CardPequeno/CardPequeno';
import Email from './email.png';
import Placeholder from './placeholder.png';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={Perfil} 
          nome="Daniel Barradas" 
          descricao="Oi, eu sou o Daniel. Atualmente estudando desenvolvimento Full Stack em horário noturno, na escola de programação Labenu. Onde além da parte técnica, estudo e ponho em prática metodologias ágeis (Sprint/Kanban/Scrum)."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/271/271210.png" 
          texto="Ver mais"
        />
      </div>

      <div className='page-section-container'>
        <CardPequeno 
          imagem={Email} 
          nome="E-mail:⠀" 
          descricao="contato.danielbarradass@gmail.com" 
        />

        <CardPequeno 
          imagem={Placeholder} 
          nome="Endereço:⠀" 
          descricao="Rio de Janeiro, Brasil." 
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={LogoSegundaExperiencia} 
          nome="Intnet" 
          descricao="Ocupando cargo de analista de marketing júnior, executei tarefas de desenvolvimento, gerenciamento e análise de campanhas, inbound marketing, marketing de conteúdo, pesquisas, landing pages, publicidade impressa, dark posts, idealização e publicação de peças (feed e stories) através de ferramentas do Facebook Business Manager." 
        />
        
        <CardGrande 
          imagem={LogoPrimeiraExperiencia}
          nome="Lenny Niemeyer" 
          descricao="Estágio de Design, onde tive experiência com fotografia básica, edição e tratamento de imagens, aplicação de estampas, elaboração de mockups virtuais, desenvolvimento de moodboards, montagem de books e catálogos exibidos dentro e fora do Brasil." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
