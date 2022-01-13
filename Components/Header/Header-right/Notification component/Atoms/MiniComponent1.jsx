import React from "react";
import styles from "../styles/NotificationStyles.module.css";
function MiniComponent1() {
  return (
    <div className={styles.box1}>
      <div className={styles.text}>
        <h1>Notifications</h1>{" "}
      </div>
      <div className={styles.pending}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#b1aaaa"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
        </svg>
      </div>
    </div>
  );
}

export default MiniComponent1;
