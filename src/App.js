import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Botao from "./botao"

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      atual:"",
      lista:[]
    }
  }

  add=()=>{
    this.state.lista.push(this.state.atual)
    this.setState({atual:""})
    console.log(this.state)
  }

  render() {
    return (
      <div className="App">
        <div>
        <div><p>TODO</p></div>
        <div><input
         value={this.state.atual}
         id="todoentrada" 
         placeholder="digite um to do"
         onChange={(txt)=>{this.setState({atual:txt.target.value})}}/></div>
        <div onClick={this.add}><Botao texto="adicionar"/></div>
        </div>
        <div></div>
      </div>
    );
    //linha 19 seria equivalente a const botao = new  Botao({texto: 'adicionar'})
  }
}

export default App;
