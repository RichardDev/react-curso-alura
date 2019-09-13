import React from 'react';
import './App.css';
import Tabela from './components/Tabela';

const autores = [
  {
    nome: "Stephen King",
    livro: "Torre negra",
    preco: "39.90"
  },
  {
    nome: "JR Tolkien",
    livro: "Silmarillion",
    preco: "44.90"
  },
];

function App() {
  return (
    <div className="App">
      <Tabela autores = {autores} />      
      <h1>Hello</h1>
    </div>
  );
}

export default App;
