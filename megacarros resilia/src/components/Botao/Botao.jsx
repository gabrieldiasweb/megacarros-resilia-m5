import React from "react";
import styles from "./Botao.module.css";
function Botao(props) {
  return (
    <>
      <button className={styles.btn} type={props.type} onClick={props.click}>
        {props.texto}
      </button>
    </>
  );
}

export default Botao;
