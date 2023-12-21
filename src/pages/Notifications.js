import React from "react";
import SideBar from "../components/SideBar";
import Notification from "../components/Notify";
const Notifications = () => {
  return (
    <div className="row">
      <div className="col-3" style={{ borderRight: ".1em solid #333" }}>
        <SideBar />
      </div>
      <div className="col-9">
        <h1 className="fw-bold my-4">Notifications</h1>
        <div>
          <Notification
            notification="Your Facebook friend chloegerald is now on Instagram as cgcomplete"
            time="now"
          />
          <Notification
            notification="alexny started following you"
            time="5mins ago"
          />
          <Notification
            notification="WiseClicker started following you"
            time="47mins ago"
          />
          <Notification
            notification="Josey.1982 tagged you in a post"
            time="4hrs ago"
          />
          <Notification
            notification="Josey.1982 liked your photo"
            time="4hrs ago"
          />
          <Notification
            notification="rexa_20 and konjatte followed on Instagram"
            time="1day ago"
          />
        </div>
      </div>
    </div>
  );
};

export default Notifications;
