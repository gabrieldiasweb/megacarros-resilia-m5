import React from "react";
import styles from "./PageHome.module.css";
import Botao from "../../components/Botao/Botao.jsx";
import { Link } from "react-router-dom";
import Home from "../../img/home.png";

function PageHome() {
  return (
    <div className={styles.container}>

      <h1 className={styles.titulo}>GERENCIE SUA GARAGEM</h1>
     <div className={styles.btn}> <Link to="/garagem">
        <Botao  texto={"GERENCIAR GARAGEM"} />
      </Link> 
      </div> 
        <img src={Home} className={styles.imagemHome} />
    </div>
  );
}

export default PageHome;
