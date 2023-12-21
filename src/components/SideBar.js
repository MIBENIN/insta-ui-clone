import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import InstaTypo from "../assets/images/insta_typo.png";
import {
  FaHome,
  FaFacebookMessenger,
  FaHeart,
  FaPlusSquare,
  FaInstagramSquare,
  FaRegUserCircle,
} from "react-icons/fa";
import { MdExplore, MdLogout } from "react-icons/md";
import PostModal from "../components/PostModal";
import { useState } from "react";
function SideBar() {
  const [showPostModal, setShowPostModal] = useState(false);

  const handlePostClick = () => {
    setShowPostModal(true);
  };

  const handleClosePostModal = () => {
    setShowPostModal(false);
  };
  return (
    <div className="sidebar">
      <div>
        <Link className="sidebar_Link">
          <FaInstagramSquare className="sidebar_icons" />
          <span>
            <img
              src={InstaTypo}
              alt="insta typo"
              style={{ width: "10rem" }}
              className="sidebar_label"
            />
          </span>
        </Link>
        <div className="sidebar_Links">
          <Link to="/home" className="sidebar_Link">
            <FaHome className="sidebar_icons" />
            <span className="sidebar_label">Home</span>
          </Link>
          <Link to="/explore" className="sidebar_Link">
            <MdExplore className="sidebar_icons" />
            <span className="sidebar_label">Explore</span>
          </Link>
          <Link to="/messages" className="sidebar_Link">
            <FaFacebookMessenger className="sidebar_icons" />
            <span className="sidebar_label">Messages</span>
          </Link>
          <Link to="/notifications" className="sidebar_Link">
            <FaHeart className="sidebar_icons" />
            <span className="sidebar_label">Notifications</span>
          </Link>
          <Link className="sidebar_Link" onClick={handlePostClick}>
            <FaPlusSquare className="sidebar_icons" />
            <span className="sidebar_label">Create</span>
          </Link>
          <Link to="/profile" className="sidebar_Link">
            <FaRegUserCircle className="sidebar_icons" />
            <span className="sidebar_label">Profile</span>
          </Link>
        </div>
      </div>

      <div className="sidebar_Links">
        <Link to="/login" className="sidebar_Link">
          <MdLogout className="sidebar_icons" />
          <span className="sidebar_label">Log out</span>
        </Link>
      </div>
      <PostModal showModal={showPostModal} handleClose={handleClosePostModal} />
    </div>
  );
}

export default SideBar;
