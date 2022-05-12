import React from "react";
import { Link } from "react-router-dom";
import image from "../../assets/images/d2.png";
import "./DoctorCard.css";
import directionicon from "../../assets/images/directionicon.png";
import likeicon from "../../assets/images/likeicon.png";
const DoctorCard = () => {
  return (
    <div>
      {/* <Link to="#" className="doctor_card_link"> */}
      <div className="mb-3 single_doctors_card">
        <div className="row g-0">
          <div className="col-md-3">
            <div className="doctor_card_img">
              <img src={image} className="img-fluid" alt="..." />
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="doctor_card_detail">
              <h5 className="doctor_name mb-2">Dr. Krishnanand</h5>
              <span className="mb-2">Orthopedist</span>
              <ul className="mb-2">
                <li>Own Clinic</li>
              </ul>
              <p className="mb-2">14 years experience overall</p>
              <p className="distance_kms">5.2 KM</p>
              <h5 className="consult">
                Consultation fee at clinic
                <span className="distance_kms"> ₹600 </span>
              </h5>
              <button className="doctor_rating">
                <img src={likeicon} alt="likeicon"></img> 60%
              </button>
            </div>
          </div>
          <div className="col-sm-12 col-md-3">
            <div className="doctor_card_right">
              <button className="direction_btn">
                <img src={directionicon} alt="directionicon"></img>
                Get Direction
              </button>
              <button className="book_appt_btn">Book Appointment</button>
            </div>
          </div>
        </div>
      </div>
      {/* </Link> */}
    </div>
  );
};

export default DoctorCard;
