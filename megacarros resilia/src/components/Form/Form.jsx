import React from 'react'
import styles from './Form.module.css'


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
                <input type="text" onChange={props.change2}/>
                <label htmlFor="">Modelo</label>
            </div>
            <div>
                <input type="number" onChange={props.change3}/>
                <label htmlFor="">Preço</label>
            </div>
        </form>
    </div>
  )
}

export default Form