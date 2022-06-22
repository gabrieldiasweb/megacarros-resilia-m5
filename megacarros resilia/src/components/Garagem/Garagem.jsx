import React, { useState, useEffect } from "react";
import styles from "./Garagem.module.css";
import { api } from "../../Services/Api.js";
import Cards from "../Cards/Cards.jsx";

function Garagem() {
  const [dados, setDados] = useState([{}]);
  const [garagem, setGaragem] = useState([{}]);
  
  useEffect(() => {
    try {
        fetch(api)
        .then((res) => res.json())
        .then((data) => {
          setDados(data.rows)
          setGaragem([...garagem, data.rows])
        })
    } catch (err) {
      console.log("error:", err);
    }
  }, []);
  return (
    <div className={styles.container}>
      {dados.map((garagem, index) => {
        return (
              <Cards
                key={index}
                id={garagem.id}
                modelo={garagem.modelo}
                preco={garagem.preco}
              />
        );
      })}
    </div>
  );
}

export default Garagem;
