import React from "react";
import styles from "../styles/NotificationStyles.module.css";
function NotificationFilter() {
  return (
    <div>
      <div className={styles.buttons}>
        <button className={(styles.btn, styles.blue)}>All</button>
        <button className={(styles.btn, styles.black)}>Unread</button>
      </div>
    </div>
  );
}

export default NotificationFilter;
