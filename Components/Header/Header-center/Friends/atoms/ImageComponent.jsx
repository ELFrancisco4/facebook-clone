import React from "react";
import styles from "../styles/friend-component.module.css";
import imageSrc from "../images/react.jpeg"
function ImageComponent() {
  return (
      <div className={styles.userImg}>
         <img src={imageSrc} alt="User picture"/>
      </div>
 
  );
}

export default ImageComponent;
