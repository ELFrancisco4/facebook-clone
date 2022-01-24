import React from "react";
import AddPersonComponent from "../atoms/AddPersonComponent";
import AllFriendsComponent from "../atoms/AllFriendsComponent";
import ArrowSVG from "../atoms/ArrowSVG";
import SettingsSVG from "../atoms/SettingsSVG";
import styles from "../styles/FriendNav.module.css";
import NavChildren from "./NavChildren";
import GroupsSVG from "./../atoms/GroupsSVG";
import FrendRequestSVG from "../atoms/FrendRequestSVG";
import SuggestionsSVG from "../atoms/SuggestionsSVG";
import ListsSVG from "../atoms/ListsSVG";
import BirthdaySVG from "../atoms/BirthdaySVG";
function FriendNavComponent() {
  return (
    <div className={styles.container}>
      <div className={styles.topSection}>
        <h1>Friends</h1>{" "}
        <div>
          <SettingsSVG svgClass={styles.settings} />
        </div>
      </div>
      <div className={styles.section}>
        <NavChildren>
          <div className={styles.navSvg}>
            <GroupsSVG svgClass={styles.group} />
            <p children={"Home"}></p>
          </div>
        </NavChildren>
        <NavChildren>
          <div className={styles.navSvg}>
            <FrendRequestSVG svgClass={styles.svg}/>
            <p children={"Friend Requests"}></p>
          </div>
          <ArrowSVG />
        </NavChildren>
        <NavChildren>
          <div className={styles.navSvg}>
            <SuggestionsSVG svgClass={styles.svg} /> <p children={"Suggestions"}></p>
          </div>
          <ArrowSVG />
        </NavChildren>
        <NavChildren>
          <div className={styles.navSvg}>
            {" "}
            <ListsSVG svgClass={styles.svg} /> <p children={"All friends"}></p>
          </div>
          <ArrowSVG />
        </NavChildren>
        <NavChildren>
          <div className={styles.navSvg}>
            {" "}
            <BirthdaySVG svgClass={styles.svg}/> <p children={"Birthdays"}></p>
          </div>
        </NavChildren>
        <NavChildren>
          <div className={styles.navSvg}>
            <ListsSVG svgClass={styles.svg} /> <p children={"Custom Lists"}></p>
          </div>
          <ArrowSVG />
        </NavChildren>
      </div>
    </div>
  );
}

export default FriendNavComponent;
