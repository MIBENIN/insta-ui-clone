import React from "react";
import Sidebar from "../components/SideBar";
import Follow from "../components/Follow";
import Stories from "../components/Stories";

import Feeds from "../components/Feeds";
import post1 from "../assets/images/post1.jpg";
import post2 from "../assets/images/post2.jpg";
import post3 from "../assets/images/post3.jpg";
import post4 from "../assets/images/post4.jpg";
import post5 from "../assets/images/post5.jpg";
const Home = () => {
  return (
    <div className="row">
      <div className="col-3" style={{ borderRight: ".1em solid #333" }}>
        <Sidebar />
      </div>
      <div className="col-5">
        <div className="d-flex align-align-items-center gap-2 overflow-scroll p-3 border border-1 border-black rounded-1 my-4">
          <Stories username="JoGlows" />
          <Stories username="TinaTravels" />
          <Stories username="KLoves2Chil" />
          <Stories username="ArtbyAri" />
          <Stories username="Katie_katwalk" />
          <Stories username="LivsLovely" />
          <Stories username="BrianPhoto" />
        </div>
        <div>
          <Feeds
            src={post1}
            profile_name="ArtbyAri"
            profile_info="Rajasthan, India"
            likes="26K"
          />
          <Feeds
            src={post2}
            profile_name="benjuz_2001"
            profile_info="TN, India"
            likes="26K"
          />
          <Feeds
            src={post3}
            profile_name="Arso_220f"
            profile_info="Rider King"
            likes="500"
          />
          <Feeds
            src={post5}
            profile_name="LovelyBee"
            profile_info="Music Lover | Pet Lover"
            likes="12K"
          />
          <Feeds
            src={post4}
            profile_name="BrianPhoto"
            profile_info="Photography Love"
            likes="12K"
          />
        </div>
      </div>
      <div className="col-4 p-3" style={{ borderLeft: ".1em solid #333" }}>
        <div className="d-flex align-items-center justify-content-between gap-3 my-4">
          <h2 style={{ fontSize: "1rem", color: "gray" }}>
            Suggestions for you
          </h2>
          <h5 className="fw-bold fs-5" style={{ fontSize: ".5rem" }}>
            See all
          </h5>
        </div>
        <div>
          <Follow
            profile_status="Suggested for you"
            profile_name="alex_anyways_18"
            button_text="Follow"
          />
          <Follow
            profile_status="Suggested for you"
            profile_name="followgirl"
            button_text="Follow"
          />
          <Follow
            profile_status="Follows you"
            profile_name="rexa_20"
            button_text="Follow"
          />
          <Follow
            profile_status="Follows you"
            profile_name="konjatte"
            button_text="Follow"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
