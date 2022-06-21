import React from 'react'
import styles from './Headers.module.css'
import {Link} from 'react-router-dom'

function Headers() {
  return (
    <div className={styles.container}> 
        <p> MEGA CARROS </p>
            <ul>
                <li><Link to="/garagem">Home</Link></li>
                <li><Link to="/garagem">Garagem</Link></li>
                <li><Link to="/garagem">Sobre</Link></li>
            </ul>

    </div>
  )
}

export default Headers