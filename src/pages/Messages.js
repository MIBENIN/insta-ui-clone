import React from "react";
import SideBar from "../components/SideBar";
import { FaFacebookMessenger } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
const Messages = () => {
  return (
    <div className="row">
      <div className="col-3" style={{ borderRight: ".1em solid #333" }}>
        <SideBar />
      </div>
      <div className="col-3">
        <div className="my-4 d-flex align-items-center justify-content-between gap-2">
          <div>
            <h1 className="fw-bold fs-4 my-3">fwdArcher</h1>
          </div>
          <div>
            <FiEdit style={{ width: "2rem", height: "2rem" }} />
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-between gap-2">
          <div>
            <h2 className="fs-5 fw-bold">Messages</h2>
          </div>
          <div>
            <h3 className="fs-5 fw-bold" style={{ color: "gray" }}>
              Requests
            </h3>
          </div>
        </div>
        <div className="min-vh-100 overflow-y-scroll d-flex justify-content-center align-items-center">
          <p>No messages found</p>
        </div>
      </div>
      <div
        className="col-6 min-vh-100 overflow-scroll d-flex justify-content-center align-items-center text-center"
        style={{ borderLeft: ".1em solid #333" }}
      >
        <div>
          <div
            className="border border-2 border-black p-2 d-inline-block"
            style={{ borderRadius: "50%" }}
          >
            <FaFacebookMessenger style={{ width: "3rem", height: "3rem" }} />
          </div>
          <h3>Your Messages</h3>
          <p>Send private photos and messages to your friend or group</p>
          <button className="btn btn-secondary">Send message</button>
        </div>
      </div>
    </div>
  );
};

export default Messages;
