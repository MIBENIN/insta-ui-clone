import React from "react";
import SideBar from "../components/SideBar";
import post1 from "../assets/images/post1.jpg";
import post2 from "../assets/images/post2.jpg";
import post3 from "../assets/images/post3.jpg";
const Explore = () => {
  return (
    <div className="row">
      <div className="col-3" style={{ borderRight: ".1em solid #333" }}>
        <SideBar />
      </div>
      <div className="col-9">
        <h1 className="my-4 fw-bold">Explore</h1>
        <div className="d-flex justify-content-center align-items-center gap-2 flex-wrap mb-3">
          <img
            src={post1}
            alt="posts"
            style={{ width: "15rem", height: "15rem" }}
          />
          <img
            src={post1}
            alt="posts"
            style={{ width: "15rem", height: "15rem" }}
          />
          <img
            src={post1}
            alt="posts"
            style={{ width: "15rem", height: "15rem" }}
          />
          <img
            src={post1}
            alt="posts"
            style={{ width: "15rem", height: "15rem" }}
          />
          <img
            src={post1}
            alt="posts"
            style={{ width: "15rem", height: "15rem" }}
          />
          <img
            src={post3}
            alt="posts"
            style={{ width: "15rem", height: "15rem" }}
          />
          <img
            src={post1}
            alt="posts"
            style={{ width: "15rem", height: "15rem" }}
          />
          <img
            src={post1}
            alt="posts"
            style={{ width: "15rem", height: "15rem" }}
          />
          <img
            src={post1}
            alt="posts"
            style={{ width: "15rem", height: "15rem" }}
          />
          <img
            src={post1}
            alt="posts"
            style={{ width: "15rem", height: "15rem" }}
          />
          <img
            src={post1}
            alt="posts"
            style={{ width: "15rem", height: "15rem" }}
          />
          <img
            src={post1}
            alt="posts"
            style={{ width: "15rem", height: "15rem" }}
          />
          <img
            src={post1}
            alt="posts"
            style={{ width: "15rem", height: "15rem" }}
          />
          <img
            src={post1}
            alt="posts"
            style={{ width: "15rem", height: "15rem" }}
          />
          <img
            src={post1}
            alt="posts"
            style={{ width: "15rem", height: "15rem" }}
          />
          <img
            src={post1}
            alt="posts"
            style={{ width: "15rem", height: "15rem" }}
          />
          <img
            src={post2}
            alt="posts"
            style={{ width: "15rem", height: "15rem" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Explore;
