import React from 'react'
import Garagem from "../../components/Garagem/Garagem.jsx"
import Botao from '../../components/Botao/Botao.jsx'

function PageGaragem() {
  return (
    <div>
        <Garagem/>
        <Botao texto="Buscar Veiculo"/>
    </div>
  )
}

export default PageGaragem