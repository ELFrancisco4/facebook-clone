import React from "react";
import ButtonComponent from "../../../../Login Page/atoms/ButtonComponent";
import styles from "../styles/friend-component.module.css";
import ImageComponent from "./ImageComponent";
import UserNameComponent from "./UserNameComponent";

function FriendComponent() {
  return (
    <div className={styles.box}>
      <div className={styles.friendComponent}>
        <ImageComponent />
        <div className={styles.username}>
          {" "}
          <UserNameComponent textClass={styles.headerText}>Friend</UserNameComponent>
        
        </div>
        <ButtonComponent buttonClass={styles.add}>Add Friend</ButtonComponent>
        <ButtonComponent buttonClass={styles.remove}>Remove</ButtonComponent>
      </div>
    </div>
  );
}

export default FriendComponent;
