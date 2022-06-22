import React, {useState} from 'react'
import { api } from '../../Services/Api.js'
import Form from '../../components/Form/Form.jsx'
import Botao from '../../components/Botao/Botao.jsx'
import axios from 'axios'


function PageDelete() {
    const [id, setId] = useState({})
    const del = (e)=>{
        e.preventDefault()
        try{
            axios.delete(`${api}/${id}`)
            .then(res=>{
                res.json
            })
        } catch(e){
            console.error(e)
        }
    }
  return (
    <div>
        <Form
        title={"Deletar Carro"}
        submit={(e) => del(e)}
        change1={(e) =>setId(e.target.value)}
        display1={"none"}
        texto={"Deletar"}
        />
       
    </div>
  )
}

export default PageDelete