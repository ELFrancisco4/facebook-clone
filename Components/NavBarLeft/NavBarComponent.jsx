import React, { useEffect, useState } from "react";
import ScrollComponent from "./SeeMoreComponent";

function NavBarLeft() {
  const handleDropDown = () => {
    return <ScrollComponent />;
  };

  return (
    <div>
      <div className="nav-bar-left">
        <div className="icons">
          <svg
            height={30}
            width={30}
            xmlns="http://www.w3.org/2000/svg"
            className="h-2 w-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>{" "}
          <p>Francis Offiong</p>
        </div>
        <div className="icons">
          <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png"></img>{" "}
          <p className="text-green">Find Friends</p>
        </div>
        <div className="icons">
          <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yI/r/k0tRiO8UGxF.png"></img>{" "}
          <p className="text-color-500">Welcome</p>
        </div>
        <div className="icons">
          <img src="https://www.facebook.com/rsrc.php/v3/yD/r/CwKNCefmHON.png"></img>{" "}
          <p>Ad Centre</p>
        </div>
        <div className="icons">
          {" "}
          <img src="https://www.facebook.com/rsrc.php/v3/y5/r/PrjLkDYpYbH.png"></img>{" "}
          <p>Groups</p>
        </div>
        <div className="icons">
          <img src="https://www.facebook.com/rsrc.php/v3/yU/r/D2y-jJ2C_hO.png"></img>{" "}
          <p>Market Place</p>
        </div>
        <div className="icons">
          <img src="https://www.facebook.com/rsrc.php/v3/y5/r/duk32h44Y31.png"></img>{" "}
          <p>Watch</p>
        </div>
        <div className="icons">
          <img
            src="https://www.facebook.com/rsrc.php/v3/y8/r/he-BkogidIc.png"
            alt=""
          ></img>{" "}
          <p>Memories</p>
        </div>
        <div className="icons">
          <img
            src="https://www.facebook.com/rsrc.php/v3/yD/r/lVijPkTeN-r.png"
            alt=""
          />          <p>Saved</p>
        </div>
        <div className="icons pages">
          <img
            src="https://www.facebook.com/rsrc.php/v3/yH/r/kyCAf2jbZvF.png"
            alt=""Pag
          />
          <p>es</p>
        </div>
        <div className="icons">
          <svg viewBox="0 0 16 16" height={30} width={30} class="see-more">
            <g fill-rule="evenodd" transform="translate(-448 -544)">
              <path
                fill-rule="nonzero"
                d="M452.707 549.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L456 552.586l-3.293-3.293z"
              ></path>
            </g>
          </svg>{" "}
          <button className="btn" onClick={handleDropDown}>
            See More
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavBarLeft;
