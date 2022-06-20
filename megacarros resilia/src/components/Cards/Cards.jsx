import React from "react";
import styles from "./Cards.module.css";

function Cards({ id, modelo, preco }) {
  return (
    <div>
      <h3> nº {`${id}`} </h3>
      <h1> {`${modelo}`} </h1>
      <h2> {`${preco}`} </h2>
    </div>
  );
}

export default Cards;
