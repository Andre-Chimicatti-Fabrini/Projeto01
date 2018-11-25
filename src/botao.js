import React,{Component} from "react"

import "./botao.css"

class Botao extends Component
{
    render()
    {
        return (
        <div className="botao" onClick={this.props.clique}>
            <p className="textoDoBotao">
            {this.props.texto}
            </p>
        </div>
        )
    }
}

export default Botao