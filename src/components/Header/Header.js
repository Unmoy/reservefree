import React from "react";
import "./Header.css";
import doctorImage1 from "../../assets/images/d1.png";
import doctorImage2 from "../../assets/images/d2.png";
import doctorImage3 from "../../assets/images/d3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faLocationArrow,
  faMapMarker,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  return (
    <div className="header_wrapper">
      <div className="header_screen">
        <div className="header_left">
          <h1>Find Local Doctors</h1>
          <p>who take your insurance.</p>
        </div>
        <div className="header_right">
          <img src={doctorImage2} alt="doctorImage2" className="doctorImage2" />
          <img src={doctorImage1} alt="doctorImage1" className="doctorImage1" />
          <img src={doctorImage3} alt="doctorImage3" className="doctorImage3" />
        </div>
      </div>
      <div className="header_bottom">
        <div className="searchInput_1">
          <FontAwesomeIcon icon={faSearch} className="icon_color" />
          <input
            placeholder="Condition,Procedure,Doctor..."
            type="text"
            name=""
            id=""
          />
        </div>
        <div className="searchInput_1">
          <FontAwesomeIcon icon={faMapMarker} className="icon_color" />
          <input placeholder="Your Location" type="text" name="" id="" />
        </div>
        <button className="locate_btn">
          <span>
            <FontAwesomeIcon icon={faLocationArrow} className="icon_color" />
          </span>
          locate me
        </button>

        <div className="calender">
          <FontAwesomeIcon icon={faCalendar} className="icon_color" />
          <span>Today</span>
        </div>
        <button className="search_btn2">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </div>
  );
};

export default Header;
