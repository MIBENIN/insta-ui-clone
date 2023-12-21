import React from "react";
import { CgProfile } from "react-icons/cg";
const Follow = (props) => {
  return (
    <div className="d-flex justify-content-between align-items-center gap-2 mb-3">
      <div className="d-flex align-items-center gap-1">
        <CgProfile style={{ width: "3rem", height: "3rem" }} />

        <div>
          <h3 className="fw-bold " style={{ fontSize: "1rem" }}>
            {props.profile_name}
          </h3>
          <p style={{ color: "gray", fontSize: ".8rem" }} className="mb-0">
            {props.profile_status}
          </p>
        </div>
      </div>
      <button className="btn btn-secondary">{props.button_text}</button>
    </div>
  );
};

export default Follow;
