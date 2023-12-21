import React from "react";
import LoginPageIllustration from "../assets/images/loginpage_pic.png";
import InstaTypo from "../assets/images/insta_typo.png";
import GetTheApp from "../components/GetTheApp";
import InputField from "../components/InputField";
import { FaFacebookSquare } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/home");
  };
  return (
    <div className="container d-flex justify-content-center align-items-center my-5">
      <div className="row">
        <div className="col col-lg-6">
          <img
            src={LoginPageIllustration}
            alt="login page illustration"
            className="img-fluid"
          />
        </div>
        <div className="col col-lg-6">
          <div className="text-center">
            <form className="p-3 border border-1 rounded-1">
              <img
                src={InstaTypo}
                alt="insta-logo"
                className="d-block m-auto"
                style={{ width: "15rem" }}
              />
              <div className="my-3">
                <InputField
                  type="email"
                  id="floatingEmail"
                  placeholder="name@example.com"
                  label="Email address"
                />

                <InputField
                  type="password"
                  id="floatingPassword"
                  placeholder="Password"
                  label="Password"
                />
                <button
                  type="submit"
                  className="btn btn-primary w-100 fw-bold"
                  onClick={handleClick}
                >
                  Log in
                </button>
              </div>
              <div className="text-uppercase mb-3">Or</div>
              <Link className=" w-100 fw-bold text-decoration-none">
                <FaFacebookSquare
                  style={{ width: "1.5rem", height: "1.5rem" }}
                  className="me-2"
                />{" "}
                Log in with Facebook
              </Link>
              <Link className="d-block text-decoration-none fw-bold mt-4 mb-3">
                Forget Password ?
              </Link>
            </form>
            <div className="p-3 border border-1 rounded-1 my-3">
              <p>
                Don't have an account?{" "}
                <Link to="/signup" className="fw-bold">
                  Sign Up
                </Link>
              </p>
            </div>
            <GetTheApp />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
