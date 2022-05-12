import React, { useEffect } from "react";
import "./ClinicDetail.css";
import locationicon from "../../assets/images/locationicon.png";
const ClinicDetail = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div className="clinic_detail_form d-flex justify-content-center align-items-center flex-column">
      <h1>Clinic Details/Location</h1>
      <p>It’s going to take only few minutes</p>

      <div className="clinic_detail_box">
        <div>
          <label htmlFor="name">Clinic Name*</label>
          <input
            type="text"
            name="name"
            className="clinic_input"
            placeholder="Enter Clinic Name"
          />
        </div>
        <div>
          <label htmlFor="number">
            Add current location to get better result
          </label>
          <button className="location_button">
            <img src={locationicon} alt="locationicon"></img> Add Current
            Location
          </button>
        </div>
        <div>
          <label htmlFor="email">House/Street/Gali Number*</label>
          <input
            type="text"
            name="email"
            className="clinic_input"
            placeholder="Enter your House/Street/Gali Number"
          />
        </div>
        <div>
          <label htmlFor="speciality">Sec/Area/Locality</label>
          <input
            type="text"
            name="speciality"
            className="clinic_input"
            placeholder="Enter your Sec/Area/Locality"
          />
        </div>
        <div>
          <label htmlFor="speciality">Pincode*</label>
          <input
            type="text"
            name="speciality"
            className="clinic_input"
            placeholder="Enter your Pincode"
          />
        </div>
        <div>
          <label htmlFor="speciality">City*</label>
          <input
            type="text"
            name="speciality"
            className="clinic_input"
            placeholder="Enter your City"
          />
        </div>
        <div>
          <label htmlFor="speciality">State*</label>
          <input
            type="text"
            name="speciality"
            className="clinic_input"
            placeholder="Enter your State"
          />
        </div>
      </div>
    </div>
  );
};

export default ClinicDetail;
