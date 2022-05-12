import React, { useState } from "react";
import "./OtpForm.css";
import banner from "../assets/images/banner.png";
const OtpForm = () => {
  const [otp, setOtp] = useState(new Array(4).fill(""));

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;
    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
    //Focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };
  return (
    <section className="login_screen">
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-md-6 mb-4">
            <div className="login_form">
              <h1>Welcome!</h1>
              <p className="otp_login_sub_heading">
                Enter the OTP, we have sended on your number
              </p>
              <div>
                <div className="w-75 d-flex justify-content-between mb-0">
                  <p className="num">+91-7488902311</p>
                  <p className="change_num">Change Number</p>
                </div>
                <div className="w-75 otp_box d-flex justify-content-center ms-3">
                  {otp.map((data, index) => {
                    return (
                      <input
                        className="verify_otp"
                        type="text"
                        name="otp"
                        maxLength="1"
                        key={index}
                        value={data}
                        onChange={(e) => handleChange(e.target, index)}
                        onFocus={(e) => e.target.select()}
                      />
                    );
                  })}
                </div>
                <div className="login_btn">
                  <button>Verify OTP</button>
                </div>
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

export default OtpForm;
