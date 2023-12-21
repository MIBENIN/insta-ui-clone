import React from "react";
import SideBar from "../components/SideBar";
import Profile_pic from "../assets/images/profile_pic.png";
import { CiSettings } from "react-icons/ci";
import { FaHashtag, FaRegBookmark, FaFile } from "react-icons/fa";

import { useState } from "react";
const Profile = () => {
  const [selectedTab, setSelectedTab] = useState("posts");

  const renderContent = () => {
    switch (selectedTab) {
      case "posts":
        return (
          <div>
            <h3 className="fs-3 fw-bold">Share Photos</h3>
            <p>When you share photos, they will appear on your profile.</p>
            <button className="btn text-primary">Share your first photo</button>
          </div>
        );
      case "saved":
        return <p>No saved items found.</p>;
      case "tagged":
        return <p>No tagged items found.</p>;
      default:
        return null;
    }
  };
  return (
    <div className="row">
      <div className="col-3" style={{ borderRight: ".1em solid #333" }}>
        <SideBar />
      </div>
      <div className="col-9">
        <div
          className=" p-3 my-4 d-flex justify-content-start align-items-start gap-5"
          style={{ borderBottom: ".1em solid gray" }}
        >
          <div>
            <img
              src={Profile_pic}
              alt="profile pic"
              style={{ width: "10rem", height: "10rem" }}
            />
          </div>
          <div>
            <div className="d-flex align-items-center gap-2 mt-4">
              <h1 className="fs-4">fwdArcher</h1>
              <button className="btn btn-secondary">Edit Profile</button>
              <button className="btn btn-secondary">View Archive</button>
              <CiSettings style={{ width: "2rem", height: "2rem" }} />
            </div>

            <div className="d-flex align-items-center gap-4 my-4">
              <div>
                <strong>0 posts</strong>
              </div>
              <div>
                <strong>0 followers</strong>
              </div>
              <div>
                <strong>0 following</strong>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="d-flex justify-content-center gap-3 mb-3">
            <button
              className={`btn btn-link text-uppercase text-dark fw-bold text-decoration-none rounded-0 ${
                selectedTab === "posts" && "active"
              }`}
              style={{
                borderBottom: selectedTab === "posts" && "3px solid #333",
              }}
              onClick={() => setSelectedTab("posts")}
            >
              <FaFile
                style={{ width: "2rem", height: "2rem", marginRight: ".5em" }}
              />
              Posts
            </button>
            <button
              className={`btn btn-link text-uppercase text-dark fw-bold text-decoration-none rounded-0 ${
                selectedTab === "saved" && "active"
              }`}
              style={{
                borderBottom: selectedTab === "saved" && "3px solid #333",
              }}
              onClick={() => setSelectedTab("saved")}
            >
              <FaRegBookmark
                style={{ width: "2rem", height: "2rem", marginRight: ".5em" }}
              />
              Saved
            </button>
            <button
              className={`btn btn-link text-uppercase text-dark fw-bold text-decoration-none rounded-0 ${
                selectedTab === "tagged" && "active"
              }`}
              style={{
                borderBottom: selectedTab === "tagged" && "3px solid #333",
              }}
              onClick={() => setSelectedTab("tagged")}
            >
              <FaHashtag
                style={{ width: "2rem", height: "2rem", marginRight: ".5em" }}
              />
              Tagged
            </button>
          </div>

          <div className="p-4 text-center">{renderContent()}</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
