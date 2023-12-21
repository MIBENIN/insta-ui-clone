import React from "react";
import { Link } from "react-router-dom";
import { BiLogoPlayStore } from "react-icons/bi";
import { AiFillAppstore } from "react-icons/ai";
const GetTheApp = () => {
  return (
    <div>
      <h4 className="fs-5 mb-4">Get the App</h4>
      <div className="d-flex gap-3 justify-content-center">
        <div className="bg-primary  d-inline-flex align-items-center gap-2 p-2 rounded-1">
          <div>
            <BiLogoPlayStore
              style={{
                backgroundColor: "white",
                width: "2rem",
                height: "2rem",
              }}
            />
          </div>
          <div>
            <div className="text-light text-left">Get It On</div>
            <Link className="text-light fw-bold fs-5">Google Play</Link>
          </div>
        </div>

        <div className="bg-primary  d-inline-flex align-items-center gap-2 p-2">
          <div>
            <AiFillAppstore
              style={{
                backgroundColor: "white",
                width: "2rem",
                height: "2rem",
              }}
            />
          </div>
          <div>
            <div className="text-light text-left">Get It From</div>
            <Link className="text-light fw-bold fs-5">Microsoft</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetTheApp;
