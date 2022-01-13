import React from 'react'
import styles from "../styles/login.module.css"
export const InputComponent = ({type, placeholder,buttonClass}) => {
    return (
        <input
        className={buttonClass}
        type={type}
        placeholder={placeholder}
      />
    )
}