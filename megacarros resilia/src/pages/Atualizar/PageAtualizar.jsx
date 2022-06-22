import React, { useState } from "react";
import Botao from "../../components/Botao/Botao.jsx";
import Form from "../../components/Form/Form.jsx";
import styles from "./PageAtualizar.module.css";
import { api } from "../../Services/Api.js";

function Atualizar() {
  const [item, setItem] = useState({});
  const [id, setId] = useState({});
  const [modelo, setModelo] = useState({});
  const [preco, setPreco] = useState({});
  const atualiza = (e) => {
    e.preventDefault();
    try {
      fetch(`${api}/${id}`, {
        method: "PUT",
        body: JSON.stringify(item),
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <div>
      <Form
        title={"Modificar Carro"}
        submit={(e) => atualiza(e)}
        change1={(e) => {
          setId(e.target.value);
          setItem({
            id,
            modelo,
            preco,
          });
        }}
        change2={(e) => setModelo(e.target.value)}
        change3={(e) => {
          setPreco(e.target.value);
          setItem({
            id,
            modelo,
            preco,
          });
        }}
        texto={"Modificar"}
      />
    
    </div>
  );
}

export default Atualizar;
