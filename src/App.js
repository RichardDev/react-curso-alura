import React, {Component} from 'react';
import './App.css';
import Tabela from './components/Tabela';
import Formulario from './components/Formulario';

class App extends Component {

/*  
  Controle do estado da aplicação, tudo que diz respeito aocontrole de estado de um componente
  tem um lugar específico para ser armazenado no React: o "state" ("estado" em inglês). 
*/
state = {
  autores : [
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
  ],
}
  
  escutadorDeSubmit = autor => {
    this.setState({ autores:[...this.state.autores, autor]})
  }

  removerAutor = index => {
    const { autores } = this.state;
    this.setState (
      {
        autores: autores.filter((autor, posAtual) => {
          return posAtual !== index;
        }),
      });
  }

  render() {
    return (
      <div className="App">
          <Tabela autores = {this.state.autores}  removerAutor = { this.removerAutor } />  
          <Formulario escutadorDeSubmit = { this.escutadorDeSubmit } />    
        <h1>Hello</h1>
      </div>
    );
  }
}

export default App;
