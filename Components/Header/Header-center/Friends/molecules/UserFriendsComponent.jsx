import React from "react";
import LinksComponent from "../../../../Login Page/atoms/LinksComponent";
import FriendComponent from "../atoms/FriendComponent";
import styles from "../styles/mainstyles.module.css";
import FriendNavComponent from "./FriendNavComponent";
function UserFriendsComponent() {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        <li>
          <h2>People you may know</h2>
        </li>
        <li>
          <LinksComponent linkClass={styles.link}>See all</LinksComponent>
        </li>
      </ul>
      <div className={styles.box}>
        {" "}
        <FriendComponent />

        {/* <FriendComponent /> */}
        {/* <FriendComponent />
        <FriendComponent /> */}
       
      </div>
      <FriendNavComponent/>
    </div>
  );
}

export default UserFriendsComponent;
