import React from "react";
import "./AppointmentCard.css";
const AppointmentCard = ({ appointment }) => {
  console.log(appointment);
  return (
    <div className="appt_card">
      <div className=" d-flex justify-content-between">
        <h6 className="appt_time">
          {appointment.from[0].timefrom} {appointment.from[0].fromdayTime} -
          {appointment.to[0].timeto} {appointment.to[0].todayTime}
        </h6>
        <div>
          <button>Edit</button>
        </div>
      </div>
      <div className="appt_days">
        <ul>
          {appointment.days.map((day) => (
            <li>{day.substring(0, 3)}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AppointmentCard;
