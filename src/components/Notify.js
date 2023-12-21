import React from "react";
import { CgProfile } from "react-icons/cg";
const notification = (props) => {
  return (
    <div className="border border-1 p-3 d-flex justify-content-between align-items-center gap-2 mb-3">
      <div className="d-flex gap-2 align-items-center">
        <p className="mb-0">
          <CgProfile style={{ width: "3rem", height: "3rem" }} />
        </p>
        <p className="mb-0">{props.notification}</p>
      </div>
      <div>
        <strong>{props.time}</strong>
      </div>
    </div>
  );
};

export default notification;
