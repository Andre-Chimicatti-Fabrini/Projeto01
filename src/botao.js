import React,{Component} from "react"

class Botao extends Component
{
    render()
    {
        return (
        <div><p>{this.props.texto}</p></div>
        )
    }
}

export default Botao