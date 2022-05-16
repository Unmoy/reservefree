import "./Stats.css";
import patienticon from "../../../assets/images/background/patients.png";
import calendericon from "../../../assets/images/background/calender.png";
import clockicon from "../../../assets/images/background/clock.png";
import revenueicon from "../../../assets/images/background/revenue.png";
function Stats() {
  return (
    <div className="stats--container">
      <div className="stat--card card--1">
        <span className="stat--icon--div icon--1">
          <img src={patienticon} alt="icon" className="stat--icon" />
        </span>
        <span className="stat--text">
          <span className="stat--heading">No. of patients</span>
          <span className="stat--value">224</span>
        </span>
      </div>
      <div className="stat--card card--2">
        <span className="stat--icon--div icon--2">
          <img src={revenueicon} alt="icon" className="stat--icon" />
        </span>
        <span className="stat--text">
          <span className="stat--heading">Today's Revenue</span>
          <span className="stat--value">&#8377; 224</span>
        </span>
      </div>
      <div className="stat--card card--3">
        <span className="stat--icon--div icon--3">
          <img src={calendericon} alt="icon" className="stat--icon" />
        </span>
        <span className="stat--text">
          <span className="stat--heading">Monthly Revenue</span>
          <span className="stat--value">&#8377; 224</span>
        </span>
      </div>
      <div className="stat--card card--4">
        <span className="stat--icon--div icon--4">
          <img src={clockicon} alt="icon" className="stat--icon" />
        </span>
        <span className="stat--text">
          <span className="stat--heading">Today's No-show</span>
          <span className="stat--value">3</span>
        </span>
      </div>
    </div>
  );
}

export default Stats;
