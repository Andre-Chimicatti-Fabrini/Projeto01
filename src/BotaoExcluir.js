import React from 'react'
import excluir from './excluir.jpg'
import "./BotaoExcluir.css"

const BotaoExcluir = ({clique}) => {
    return (
        <div onClick={clique}>
            <img
                className="imagemExcluir"
                src={excluir} alt=""

            />
        </div>
    )
}

export default BotaoExcluir