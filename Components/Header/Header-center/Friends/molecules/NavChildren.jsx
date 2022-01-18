import React from 'react'
import styles from "../styles/FriendNav.module.css";
function NavChildren({children}) {
    return (
        <div className={styles.svgContainer}>
          {children}
        </div>
    )
}

export default NavChildren
