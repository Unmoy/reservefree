import React from "react";
import "./Monitor.css";
import DashboardNav from "../DashboardNav/DashboardNav";
import Requests from "../Request/Requests";
import Stats from "../stats/Stats";
import Appointments from "../AppointmentsList/Appointments";
const Monitor = () => {
  return (
    <div>
      <div className="">
        <DashboardNav />
        <div className="">
          <Stats />
          <div className="other">
            <Requests />
            <Appointments />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Monitor;
