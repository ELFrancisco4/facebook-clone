import React from "react";
import styles from "../styles/friend-component.module.css";
import Image from "next/image";
function ImageComponent() {
  return (
    <img
      className={styles.userImg}
      src="https://scontent.flos6-1.fna.fbcdn.net/v/t39.30808-1/p240x240/270660613_1311613582602013_725199195072659110_n.jpg?_nc_cat=106&amp;ccb=1-5&amp;_nc_sid=7206a8&amp;_nc_eui2=AeF82nJdEOWzDQTf7dOhq5R1B14qOwJBs3UHXio7AkGzdSkQZneOWtP_--Ld3x0EMw14Sagy3SGiF2GBBSlilHXm&amp;_nc_ohc=u4CxrZe9LaYAX_-ocrM&amp;_nc_pt=5&amp;_nc_ht=scontent.flos6-1.fna&amp;oh=00_AT9afI2C1DbSI7taX_c2Cwvlv7fzisuTzUabnmOxQnMCng&amp;oe=61E97A01"
    ></img>
  );
}

export default ImageComponent;
