import React, { Component } from 'react';
import './App.css';
import Botao from "./botao"
import BotaoExcluir from './BotaoExcluir'
import excluir from './excluir.jpg'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      atual: "",
      lista: [],
      id: 0
    }
  }

  adicionar = (e) => {
    console.log('event', e)
    e.preventDefault()
    const novaLista = [...this.state.lista,
    {
      id: this.state.id,
      texto: this.state.atual
    }]
    this.setState({
      atual: "",
      lista: novaLista,
      id: this.state.id + 1,
    })
    console.log(this.state)
  }

  excluirItem = (indice, e) => {
    // this.setState({
    //     lista: this.state.lista.splice(
    //       this.state.lista.findIndex(check(x){return x.id==indice}),
    //       1)
    // })
    console.log('excluirItem chamado')
    console.log(indice)
    console.log(e)
  }

  render() {

    console.log(this.state)
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
          <div >
            <a id="adicionar" >
              <Botao clique={this.adicionar} texto="adicionar" />
            </a>
          </div>
        </div>

        <div className="container"> {this.state.lista.length == 0 ? <p>não há todos</p> :
          <ul>{this.state.lista.map((valor, index) => {
            return (
              <li id={index}>
                <div className="tarefa">
                  <BotaoExcluir
                    clique={this.excluirItem(valor.id)}
                  />
                  <div>{valor.texto}</div>
                </div>
              </li>)
          })}
          </ul>}
        </div>
      </div>
    );
    //linha 19 seria equivalente a const botao = new  Botao({texto: 'adicionar'})
  }
}

export default App;
