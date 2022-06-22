import React from 'react'
import Garagem from "../../components/Garagem/Garagem.jsx"
import Botao from '../../components/Botao/Botao.jsx'
import styles from "./PageGaragem.module.css"
import {Link} from "react-router-dom"

function PageGaragem() {
  return (
    <div className={styles.container}>
        <Garagem/>
       <Link to={"/adicionar"}> <Botao texto="Adicionar Carro"/> </Link>
       <Link to={"/atualizar"}> <Botao texto="Editar Carro"/></Link>
       <Link to={"/deletar"}> <Botao texto="Deletar Carro"/></Link>
    </div>
  )
}

export default PageGaragem