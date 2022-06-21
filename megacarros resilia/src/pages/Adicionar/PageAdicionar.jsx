import React, { useState } from "react";
import Form from "../../components/Form/Form.jsx";
import Botao from "../../components/Botao/Botao.jsx";
import { api } from "../../Services/Api.js";

function PageAdicionar() {
  const [item, setItem] = useState({
    id: "",
    modelo: "",
    preco: "",
  });
  const [id, setId] = useState(99);
  const [modelo, setModelo] = useState("Chevet Ret");
  const [preco, setPreco] = useState(100);
  const atualiza = (e) => {
    e.preventDefault();
    try {
      fetch(api, {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    } catch (e) {
      console.log(data.e);
    }
  };
  return (
    <div>
      <Form
        title={"Adicionar Novo Carro"}
        submit={(e) => atualiza(e)}
        change1={(e) => setId(e.target.value)}
        change2={(e) => setModelo(e.target.value)}
        change3={(e) => {
          setPreco(e.target.value);
          setItem({
            id,
            modelo,
            preco
          });
        }}
        
      />
      <Botao
      texto={"Adicionar Carro"}
      click={(e) => atualiza(e)}
      />
    </div>
  );
}

export default PageAdicionar;
