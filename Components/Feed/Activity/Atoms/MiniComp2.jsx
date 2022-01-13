import React from "react";
import { InputComponent } from "../../../Login Page/atoms/InputComponent";
import UserSvgComponent from "./UserSvgComponent";

function MiniComp2() {
  return (
    <div className="svg-n-input">
      <UserSvgComponent/>
      <InputComponent buttonClass="post-input" type={"text"} placeholder={"What is on your mind, User?"}/>
    </div>
  );
}

export default MiniComp2;
