import React from 'react'
import styles from "../styles/friend-component.module.css";
function UserNameComponent({children, textClass}) {
    return (
        <h2 className={textClass}>
               {children}
        </h2>
    )
}

export default UserNameComponent
