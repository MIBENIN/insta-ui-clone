import React from "react";
import { CgProfile } from "react-icons/cg";
const Stories = (props) => {
  return (
    <div>
      <div
        className="border border-3 border-black d-inline-block"
        style={{ borderRadius: "50%" }}
      >
        <CgProfile style={{ width: "3rem", height: "3rem" }} />
      </div>

      <h3 className="mt-1" style={{ fontSize: ".8rem" }}>
        {props.username}
      </h3>
    </div>
  );
};

export default Stories;
