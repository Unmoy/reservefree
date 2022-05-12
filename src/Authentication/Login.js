import React from "react";
import { Link } from "react-router-dom";
import banner from "../assets/images/banner.png";
import google from "../assets/images/g-icon.png";
import "./Login.css";
const Login = () => {
  return (
    <section className="login_screen">
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-md-6 mb-4">
            <div className="login_form">
              <h1>Welcome!</h1>
              <p className="login_sub_heading">
                Sign In entering the information below
              </p>
              <div>
                <input
                  type="text"
                  name="number"
                  className="number_input"
                  placeholder="Enter Phone Number"
                />
                <div className="login_btn">
                  <Link to="/otp">
                    <button>Log In</button>
                  </Link>
                </div>
                <div className="divider">
                  <h1>or</h1>
                </div>
                <button className="google_btn">
                  Log in with <img src={google} alt="" />
                </button>
              </div>
            </div>
          </div>
          <div className="login_banner col-md-6">
            <img src={banner} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
