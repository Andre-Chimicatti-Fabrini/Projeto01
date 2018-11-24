import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Botao from "./botao"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      atual: "",
      lista: []
    }
  }

  add = () => {
    this.state.lista.push(this.state.atual)
    this.setState({ atual: "" })
    console.log(this.state)
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <div>
            <p className="TODO">TODO:</p>
          </div>
          <div>
            <input className="caixaDeTexto"
              value={this.state.atual}
              id="todoentrada"
              placeholder="digite um to do"
              onChange={(txt) => { this.setState({ atual: txt.target.value }) }} />
          </div>
          <div onClick={this.add}>
            <Botao texto="adicionar" />
          </div>
        </div>

        <div className="container">
          {this.state.lista.length == 0 ? <p>não há todos</p> : <ul>{this.state.lista.map((valor) => { return (<li>{valor}</li>) })}</ul>}
        </div>
      </div>
    );
    //linha 19 seria equivalente a const botao = new  Botao({texto: 'adicionar'})
  }
}

export default App;
