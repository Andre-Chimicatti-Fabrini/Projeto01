import React, { Component } from 'react';
import './App.css';
import Botao from "./botao"
import excluir from './excluir.jpg'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      atual: "",
      lista:[],
      id: 0
    }
  }

  add = () => {
    this.state.lista.push(
      {
        id: this.state.id,
        texto: this.state.atual 
      })
    
    this.setState({ atual: "", id: this.state.id + 1 })
    console.log(this.state)
  }

  excluirItem = (indice) => {
    this.state.lista.splice(indice, 1);
    console.log(indice)
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

        <div className="container"> {this.state.lista.length == 0 ? <p>não há todos</p> : 
          <ul>{this.state.lista.map((valor) => { return (
            <li>
              <div className="tarefa">
                <div>
                  <img className="imagemExcluir" src={excluir} alt="" onClick={this.excluirItem(valor.id)}/>
                </div>
                <div>{valor.texto}</div>
              </div>
            </li>) })}
          </ul>}
        </div>
      </div>
    );
    //linha 19 seria equivalente a const botao = new  Botao({texto: 'adicionar'})
  }
}

export default App;
