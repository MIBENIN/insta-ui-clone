import React from "react";
import { Link } from "react-router-dom";
import InstaLogo from "../assets/images/insta_typo.png";
import { FaFacebookSquare } from "react-icons/fa";

import InputField from "../components/InputField";
import GetTheApp from "../components/GetTheApp";
const LoginPage = () => {
  return (
    <div
      className="container d-flex justify-content-center align-items-center my-4"
      style={{ width: "100%", minHeight: "100vh" }}
    >
      <div className="text-center" style={{ width: "25rem" }}>
        <form className="p-3 border border-1 rounded-1">
          <img
            src={InstaLogo}
            alt="insta-logo"
            className="d-block m-auto"
            style={{ width: "15rem" }}
          />
          <h1 className="fs-5 fw-bold" style={{ color: "#333" }}>
            Sign up to see photos and videos from your friends.
          </h1>
          <Link className="btn btn-primary w-100 fw-bold my-3">
            <FaFacebookSquare
              style={{ width: "1.5rem", height: "1.5rem" }}
              className="me-2"
            />{" "}
            Log in with Facebook
          </Link>
          <div className="text-uppercase">Or</div>
          <div className="my-3">
            <InputField
              type="email"
              id="floatingEmail"
              placeholder="name@example.com"
              label="Email address"
            />

            <InputField
              type="type"
              id="floatingFullname"
              placeholder="Fullname"
              label="Fullname"
            />
            <InputField
              type="text"
              id="floatingUsername"
              placeholder="Username"
              label="Username"
            />
            <InputField
              type="password"
              id="floatingPassword"
              placeholder="Password"
              label="Password"
            />
          </div>
          <div>
            <p>
              Please who use our service may have uploaded your contact
              information to Instagram.<Link>Learn More</Link>
            </p>
            <p>
              By signing up, you agree to our <Link>Terms</Link>,{" "}
              <Link>Privacy</Link> , <Link>Policy</Link> and{" "}
              <Link>Cookies Policy</Link>.
            </p>
          </div>
          <button type="submit" className="btn btn-primary w-100 fw-bold">
            Sign Up
          </button>
        </form>
        <div className="p-3 border border-1 rounded-1 my-3">
          <p>
            Have an account?{" "}
            <Link to="/login" className="fw-bold">
              Log in
            </Link>
          </p>
        </div>
        <GetTheApp />
      </div>
    </div>
  );
};

export default LoginPage;
