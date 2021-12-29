import React from 'react';
import Nav from "../Nav/Nav";
import Header from "../Header/Header";
import Row from '../Row/Row';
import ColetaneaRow from '../ColetaneaRow/ColetaneaRow';


function Home() {

  
  return (
    <div className="app" >
    <Nav />
    <Header />
    <Row title='Anime' movieType='animes'/>
    <Row title='Filmes' movieType='filmes' />
    <Row title='Sci-Fi' movieType='sci-fi'/>
    <ColetaneaRow/>
    <Row title='Filmes de Herói' movieType='hero'/>
    <Row title='Filmes de Ação' movieType='action'/>
    <Row title='Animações' movieType='animacao'/>
    </div>
  );
}

export default Home;