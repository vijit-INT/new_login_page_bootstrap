import React from 'react'
import styles from './Navbar.module.css'

const TextError = (props) => {
  return (
    <div className={styles.textDiv}>
         {
            props.children
         }
    </div>
  )
}

export default TextError