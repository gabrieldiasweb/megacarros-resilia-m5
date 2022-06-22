import React from 'react'
import styles from './PageHome.module.css'
import Botao from '../../components/Botao/Botao.jsx'
import {Link} from "react-router-dom"


function PageHome() {
  return (
    <div className={styles.container}>
        <h1>COMPRE SEU CARRO AGORA</h1>
       <Link to='/garagem'> <Botao
            texto={"GARAGEM"}
        /> </Link>
    </div>
  )
}

export default PageHome