import React from "react";
import MiniComp from "../Atoms/MiniComp";
import MiniComp2 from "../Atoms/MiniComp2";

function ActivityComponent() {
  return (
    <div className="main">
        <MiniComp2 />
    <div className="line"></div>
      <div className="enclosing-box1">
          <MiniComp/>
      </div>
    </div>
  );
}

export default ActivityComponent;
