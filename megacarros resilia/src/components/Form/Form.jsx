import React from 'react'
import styles from './Form.module.css'
import Botao from '../../components/Botao/Botao.jsx'


function Form(props) {
  return (
    <div>
        <form onSubmit={props.submit}>
            <h1>{props.title}</h1>
            <div>
                <input type="number" onChange={props.change1} />
                <label htmlFor="">ID</label>
            </div>
            <div>
                <input type="text" onChange={props.change2} style={{display: props.display1}} />
                <label htmlFor="" style={{display: props.display1}} >Modelo</label>
            </div>
            <div>
                <input type="number" onChange={props.change3}style={{display: props.display1}} />
                <label htmlFor=""style={{display: props.display1}} >Preço</label>
            </div>
            <Botao texto={props.texto}/>
        </form>
    </div>
  )
}

export default Form