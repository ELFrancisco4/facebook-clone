import React, {useCallback} from "react";
import LinksComponent from "../../../../Login Page/atoms/LinksComponent";
import FriendComponent from "../atoms/FriendComponent";
import styles from "../styles/mainstyles.module.css";
import FriendNavComponent from "./FriendNavComponent";

function UserFriendsComponent() {
  
  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        {" "}
        <FriendNavComponent />
      </div>
      <div className={styles.friendComponentBox}>
        {" "}
        <ul className={styles.list}>
          <li>
            <h2>People you may know</h2>
          </li>
          <li>
            <LinksComponent linkClass={styles.link}>See all</LinksComponent>
          </li>
        </ul>
        <div className={styles.box}>
          {/* Lists for User's friends  */}
          <FriendComponent />
           <FriendComponent />
          <FriendComponent />
          <FriendComponent />
          
        </div>
      </div>
    </div>
  );
}

export default UserFriendsComponent;


