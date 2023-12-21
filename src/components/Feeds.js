import React from "react";
import { CgProfile } from "react-icons/cg";
import { IoIosMore } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { FaRegCommentAlt, FaShareSquare } from "react-icons/fa";

const Feeds = (props) => {
  return (
    <div className="border border-1 border-black rounded-2 mb-3">
      <div className="d-flex justify-content-between align-items-center gap-2 p-2">
        <div className="d-flex align-items-center gap-1">
          <CgProfile style={{ width: "3rem", height: "3rem" }} />

          <div>
            <h3 className="fw-bold " style={{ fontSize: "1rem" }}>
              {props.profile_name}
            </h3>
            <p style={{ color: "gray", fontSize: ".8rem" }} className="mb-0">
              {props.profile_info}
            </p>
          </div>
        </div>
        <button className="btn">
          <IoIosMore />
        </button>
      </div>
      <div>
        <img src={props.src} className="img-fluid" alt="post" />
      </div>
      <div className="d-flex gap-3 align-items-center justify-content-between p-2">
        <div>
          <strong>
            {props.likes} <span>Likes</span>
          </strong>
        </div>
        <div>
          <button className="btn">
            <CiHeart style={{ width: "1.5rem", height: "1.5rem" }} />
          </button>
          <button className="btn">
            <FaRegCommentAlt style={{ width: "1.5rem", height: "1.5rem" }} />
          </button>
          <button className="btn">
            <FaShareSquare style={{ width: "1.5rem", height: "1.5rem" }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Feeds;
