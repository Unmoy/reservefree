import React from "react";
import "./PersonalDetail.css";

const PersonalDetail = () => {
  return (
    <div className="personal_detail_form d-flex justify-content-center align-items-center flex-column">
      <h1>Personal Details</h1>
      <p>It’s going to take only few minutes</p>
      <div className="personal_detail_box">
        <div className="">
          <label htmlFor="name">Full Name*</label>
          <input type="text" name="name" className="stepper_input icon1" />
        </div>
        <div>
          <label htmlFor="number">Phone Number*</label>
          <input type="text" name="number" className="stepper_input icon2" />
        </div>
        <div>
          <label htmlFor="email">Email ID</label>
          <input type="text" name="email" className="stepper_input icon3" />
        </div>
        <div>
          <label htmlFor="speciality">Add Specialities*</label>
          <input
            type="text"
            name="speciality"
            className="stepper_input icon4"
          />
        </div>
        <div>
          <label htmlFor="bio">Add Bio*</label>
          <textarea
            name="bio"
            cols="40"
            rows="5"
            className="stepper_input5"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetail;
